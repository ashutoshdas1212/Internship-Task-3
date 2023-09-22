var http = require('http');

var server = http.createServer(function (request, response) {
    if (request.url === '/data.json') {
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.end(JSON.stringify({
            "id": "1",
            "name": "Tiger Nixon",
            "position": "System Architect",
            "salary": "$320,800",
            "start_date": "2011/04/25",
            "office": "Edinburgh",
            "extn": "5421"
        }));
    } else {
        response.statusCode = 404;
        response.end();
    }
});

server.listen(8080);