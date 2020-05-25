const {parse} = require("url");

module.exports = class Router {
    constructor() {
        this.routes = [];
    }

    add(method, url, handler) {
        this.routes.push({method, url, handler});
    }

    resolve(context, request) {
        let path = parse(request.url).pathname;
        
        for(let {method, url, handler} of this.routes) {
            match = url.exec(path);
            if(!math || request.method != method) continue;
            let urlParts = match.slice(1).map(decodeURIComponent);
            return handler(context, ...urlParts, request);
        }
        return null;
    }
}