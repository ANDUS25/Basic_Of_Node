import http from "http";

const PORT = 5000;

// after adding http method to "const server" this become a event emitter
const server = http.createServer((req, res) => {
  // console.log("req", req);
  // console.log("res", res);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("Welcome to Home Page");
    res.end();
  } else if (req.url === "/contact") {
    // setHeader is useful for the the browser to understand which type of content is this
    res.setHeader("Content-Type", "text/html");
    res.write("Welcome to Contact Page");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
