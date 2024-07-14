const http = require("http");

const host = "localhost";
const port = process.env.PORT || 5000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json").writeHead(200).end("ok");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
