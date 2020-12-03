require("dotenv").config({ path: "./server/config/example.env" });
const http = require("http");
const { success, error } = require("./server/utils/chalk");
const key = require("./server/config/keys.config");
const { PORT } = key;
const app = require("./server/app");
const assets = require("./server/config/static.config");

const port = PORT || 3000;

//assets set
assets();

const server = http.createServer(app);

server.listen(port, () => {
  console.log(success(`server is running on http://localhost:${PORT}`));
});
