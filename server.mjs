import http from "http";
// import { hostname } from "os";

const hostname = "127.0.0.1";
const PORT = 3000;

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1 style="color:blue">Hello Lab!</h1>`);
    res.write("<p>I wonder what else we can send...</p>");
    res.end();
  })
  .listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
  });
