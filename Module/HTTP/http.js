import http from "http";

const PORT = 5000;

// after adding http method to "const server" this become a event emitter
const server = http.createServer((req, res) => {
  // console.log("req", req);
  // console.log("res", res);

  // ============================================some request mentods==================

  if (req.url === "/") {
    // 1. cork()
    // console.log("req", req);
    // const corckData = req.cork();

    // 2.end()
    // Using this we can end the request and send the response to the client.
    // const requestEnd = req.end();

    // 3. setHeader()
    // res.setHeader("Content-Type", "text/html");

    // 4. getHeaders()
    // const requestHeaders = req?.getHeaders();
    // console.log("requestHeaders", requestHeaders);

    //5. path
    // console.log("req.url", req.url);

    //6. method
    // console.log("req.method", req.method);

    // 7.host()
    // console.log("req.host", req.host);

    // 8.protocol()
    // console.log("req.protocol", req.protocol);

    // 9. setHeader()
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cookies", "Anand");

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
