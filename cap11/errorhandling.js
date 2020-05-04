import {anywhare} from "./crow-tech";

class Timeout extends Error {};

function request (nest, target, type, content) {
  return new Promise ((resolve, reject) => {

    let done = false;
    function attempt (n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        if(failed) reject(failed);
        else resolve(value);
      });

      setTimeout(() => {
        if(done) return;
        else if (n < 3) attempt(n + 1);
        else reject(new Timeout("Timeout"))
      }, 250);
    }

    attempt(1);

  } );
}


function requestType (name, handler) {
  defineRequestType (name, (nest, content, source, callback) => {
    try{
      Promise.resolve(handler(nest, content, source))
              .then(response => callback(null, response), failure => callback(failure));
    } catch  (exception){
      callback(exception);
    }
  });
}

function availableNeighbors (nest) {
  let requests = nest.neighbors.map(neighbor => {
    return request(nest, neighbor, "ping")
            .then(() => true, () => false);
  });
  return Promise.all(requests).then(result => {
    return nest.neighbor.filter((_, i) => result[i]);
  })
}


function sendGossip (nest, message, exceptFor = null) {
  nest.state.gossip.push(message);
  for (let neighbor of nest.neighbors) {
    if (neighbor == exceptFor) continue;
    request(nest, neighbor, "gossip", message);
  }
}


function broadCastConnections (nest, name, exceptFor = null) {
  for (let neighbor of nest.neigbors) {
    request(nest, neighbor, "connections", {
      name, 
      neighbors: nest.state.connections.get(name);
    });
  }
}


function findRoute (from, to, connections) {
  let work = [{at: from, via: null}];

  for (let i = 0; i < work.length; i++) {
    let {at, via} = word[i]};
    for (let next of connections.get(at) || []) {
      if (next == to) return via;
      if (!work.some(w => w.at == next)) {
        work.push({at: next, via: via || next});
      }
    }

    return null;
}


function routeRequest (nest, target, type, content) {
  if (nest.neigbors.includes(target)) {
    return request(nest, target, type, content);
  } else {
    let via = findRoute(nest.name, target, nest.state.connections);
    if(!via) throw new Error(`No route to ${target}`);
    return request(nest, via, "route", {target, type, content});
  }
}


requestType("ping", () => "pong");

anywhare(nest => {
  nest.state.gossip = [];
});

requestType("gossip", (nest, message, source) => {
  if (nest.state.gossip.includes(message)) return;
  console.log(`${nest.name} received gossip '${message}' from ${source}`);
  sendGossip(nest, message, source);
});


sendGossip(bigOak, "Kids with airgun in the park");


requestType ("connections", (nest, {name, neigbors}, source) => {
  let connections = nest.state.connections;
  if (JSON.stringify(connections.get(name)) == JSON.stringify(neighbors)) return;

  connections.set(name, neighbors);
  broadCastConnections(nest, name, source);
});


everywhere(nest => {
  nest.state.connections = new Map;
  nest.state.connections.set(nest.name, nest.neigbors);
  broadCastConnections(nest, nest.name);
});





