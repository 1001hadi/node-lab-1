import http from "http";
// import { hostname } from "os";

const hostname = "127.0.0.1";
const PORT = 3000;

http
  .createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/html");
    //     res.write(`<h1 style="color:blue">Hello Lab!</h1>`);
    //     res.write("<p>I wonder what else we can send...</p>");
    //     res.end();

    //////////////////////
    ///// last part /////
    //----------------//

    let path = req.url;
    if (path === "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`
            <h1 style="color:teal">Hello to my node Lab!</h1>
            `);
    } else if (path == "/test") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`
            <h1 style="color:teal">Welcome to test page!</h1>
            `);
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(`
            <h1 style="color:red">Page not found!!!</h1>
            `);
    }
  })
  .listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
  });
