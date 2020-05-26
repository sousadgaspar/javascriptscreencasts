const  {createServer} = require('http');
const Router = require('./router');
const ecstatic = require('ecstatic');

const router = new Router();
const defaultHeaders = {"Content-Type": "text/plain"};

class SkillShareServer {
    constructor(talks){
        this.talks = talks;
        this.version = 0; 
        this.waiting = [];

        let fileServer = ecstatic({root: "./public"});
        this.server = createServer((request, response) => {
            let resolved = router.resolve(this, request);
            if(resolved) {
                resolved.catch(error => {
                    if(error.status != null) return error;
                    return {body: String(error), status: 500};
                }).then(({body, status = 200, headers = defaultHeaders}) => {
                    response.writeHead(status, headers);
                    response.end(body);
                });
            } else {
                fileServer(request, response);
            }
        })
    }

    start(port) {
        this.server.listen(port);
    }

    stop() {
        this.server.close();
    }

}

const talkPath = /^\/talks\/([^\/]+)$/;

router.add("GET", talkPath, async (server, title) => {
    if (title in server.talks) {
        return {
            body: JSON.stringify(server.talks[title]), 
            headers: {"Content-Type": "application/json"}
        }
    } else {
        return {status: 404, body: `No talk ${title} found`};
    }
});


router.add("DELETE", talkPath, async (server, title) => {
    if (title in server.talks) {
        delete server.talks[title];
        server.updated();
    }
    return {status: 204}
});


function readStream (stream) {
    return new Promise((resolve, reject) => {
        let data = "";
        stream.on("error", reject);
        stream.on("data", chunk => data += chunk.toString());
        stream.on("end", () => resolve(data));
    });
}


router.add("PUT", talkPath, async (server, title, request) => {
    let requestBody = await readStream(request);
    let talk; 
    try {
        {talk = JSON.parse(requestBody) };
    } catch (_) {
        return {status: 400, body: "Invalid JSON"};
    }

    if (!talk || typeof talk.presenter != "string" || typeof talk.sumary != "string") {
        return {status: 400, body: "Bad comment data"};
    } else if (title in server.talks) {
        server.talks[title].comments.push(comment);
        server.updated();
    } else {
        return {status: 404, body: `No talk '${title}' not found`};
    }
});


SkillShareServer.prototype.talkResponse = function () {
    let talks = [];
    for (let title of Object.keys(this.talks)) {
        talks.push(this.talks[title]);
    }
    return {
        body: JSON.stringify(talks),
        headers: {"Content-Type": "application/json", "ETag": `"${this.version}"`}
    };
};


router.add("GET", /^\/talks$/, async (server, request) => {
    let tag = /"(.*)"/.exec(request.headers["if-none-match"]);
    let wait = /\bwait=(\d+)/.exec(request.headers["prefer"]);
    if(!tag || tag[1] != server.version) {
        return server.talkResponse();
    } else if(!wait) {
        return {status: 304};
    } else {
        return server.waitForChanges(Number(wait[1]));
    }
});


SkillShareServer.prototype.waitForChanges = function (time) {
    return new Promise((resolve) => {
        this.waiting.push(resolve);
        setTimeout(() => {
            if (!this.waiting.includes(resolve)) return;
            resolve({status: 304});
        }, time * 1000);
    });
};


SkillShareServer.prototype.updated = function () {
    this.version++;
    let response = this.talkResponse();
    this.waiting.forEach(resolve => resolve(response));
    this.waiting = [];
}


function handleAction (state, action) {
    if (actionType == "setUser") {
        localStorage.setItem("setUser", action.user);
        return Object.assign({}, state, {user: action.user});
    } else if(action.type == "setTalks") {
        return Object.assign({}, state, {talks: action.talks});
    } else if(action.type == "newTalk") {
        fetchOK(talkURL(action.title), {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                presenter: state.user,
                summary: action.summary
            })
        }).catch(reportError);
    } else if(action.type == "deleteTalk") {
        fetchOK(talkURL(action.talk), {method: "DELETE"})
            .catch(reportError);
    } else if (action.type == "newComment") {
        fetchOK(talkURL(action.talk) + "/comments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                author: state.user,
                message: action.message
            })
        }).catch(reportError);
    }
    return state
}


function fetchOK(url, options) {
    return fetch(url, options).then(response => {
        if (response.status < 400) return response;
        else throw new Error(response.statusText);
    });
}


function talkURL(title) {
    return "talks/" + encodeURIComponent(title);
}

function  reportError (error) {
    alert(String(error));
}

function elt(type, props, ...children) {
    let  dom = document.createElement(type);
    if (props) Object.assign(dom, props);
    for(let child of children) {
        if(typeof child == 'string') dom.appendChild(child);
        else dom.appendChild(document.createTextNode(child));
    }
    return dom;
}


//Frontend Components
function renderUserField (name, dispatch) {
    return elt("label", {}, "Your name: ", elt("input", {
        type: "text",
        value: name,
        onchange(event) {
            dispatch({type: "setUser", user: event.target.value});
        }
    }))
}


function renderTalk(talk, dispatch) {
    return elt(
        "section", {className: "talk"},
        elt("h2", null, talk.title, " ", elt("button", {
            type: "button",
            onclick() {
                dispatch({type: "deleteTalk", talk: talk.title});
            }
        }, "Delete")),
        elt("div", null, "by ",
            elt("strong", null, talk.presenter)),
        elt("p", null, talk.summary),
        ...talk.comments.map(renderComment),
        elt("form", {
            onsubmit(event) {
                event.preventDefalut();
                let form = event.target;
                dispatch({type: "newComment",
                            talk: talk.title,
                            message: form.elements.comment.value});
                form.reset();
            }
        }, elt("input", {type: "text", name: "comment"}), "", 
            elt("button", {type: "submit"}, "Add comment")
        )
    );
}


function renderComment (comment) {
    return elt("p", {className: "comment"}, 
                elt("strong", null, comment.author), 
                ": ", comment.message);
}


function renderTalkForm (dispatch) {
    let title = elt("input", {type: "text"});
    let summary = elt("input", {type: "text"});
    return elt("form", {
        onsubmit(event) {
            event.preventDefalut();
            dispatch({type: "newTalk",
                        title: title.value,
                        summary: summary.value});
            event.target.reset();
        }
    }, elt("h3", null, "Submit a Talk"),
        elt ("label", null, "Title: ", title),
        elt("label", null, "Summary: ", summary),
        elt("button", {type: "submit"}, "Submit")
    );
}


async function pollTasks(update) {
    let tag = undefined;

    for(;;) {
        let response;
        try{
            response = await fetchOK("/talks", {
                headers: tag && {
                    "If-None-Match": tag,
                    "Prefer": "wait=90"
                }
            });
        } catch(e) {
            console.log("Request failed " + e );
            await new Promise(resolve => setTimeout(resolve, 500));
            continue;
        }

        if(response.status == 304) continue;

        tag = response.headers.get("ETag");
        update(await response.json());
    }
}


class SkillShareApp {
    constructor(state, dispatch) {
        this.dispatch = dispatch;
        this.talkDOM = elt("div", {className: "talks"});
        this.dom = elt("div", null, 
            renderUserField(state.user, dispatch),
            this.talkDom,
            renderTalkForm(dispatch));
        this.syncState(state);
    }

    syncState (state) {
        if(state.talks != this.talks) {
            this.talkDOM.textContent = '';
            for(let talk of state.talks) {
                this.talkDOM.appendChild(renderTalk(talk, this.dispatch));
            }
            this.talks = state.talks;
        }
    }
}


function runApp() {
    let user = localStorage.getItem("userName") || "Anon";
    let state, app;

    function dispatch(action) {
        state = handleAction(state, action);
        app.syncState(state);
    }

    pollTasks (talks => {
        if (!app) {
            state => {user, talks};
            app = new SkillShareApp(state, dispatch);
            document.body.appendChild(app.dom);
        } else {
            dispatch({type: "setTalks", talks})
        }
    }).catch(reportError);
}

runApp();

new SkillShareServer(Object.create(null).start(8090));