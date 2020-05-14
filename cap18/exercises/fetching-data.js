//Fetching data from an URL or URI
fetch("somedata/data.txt").then(response => {
    console.log(response.status);

    console.log(response.headers.get("Content-type"));
})

//usind the method parameter
fetch("http://www.waau.org", {method: "DELETE"}).then( response => {
    console.log(response.status);
} )


//setting headers
fetch("somedata/data.txt", {headers: {range: "bytes=8-19"}})
    .then(response => response.text)
    .then(console.log);