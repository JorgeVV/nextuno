const express = require("express");
const loadEnv = require("./load-env");
const next = require("next");
const path = require("path");

loadEnv();

const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/service-worker.js", (req, res) => {
    const filePath = path.join(__dirname, "..", ".next", req.path);
    return app.serveStatic(req, res, filePath);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;

    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
