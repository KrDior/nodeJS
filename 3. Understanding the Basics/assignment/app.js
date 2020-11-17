const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write(
      '<html><head><body><form action="/create-user" method="POST"><input type="text" name="username"><button submit="create-user">Click me</button></form></body></head></html>'
    );
    return res.end();
  }

  if (url === "/users") {
    res.write(
      '<html><head><body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></head></html>'
    );
    return res.end();
  }

  if (url === "/create-user" && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split('=')[1];
      console.log(user);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }

});

server.listen(3000);
