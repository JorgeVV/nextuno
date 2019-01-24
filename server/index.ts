import dotenv from "dotenv";
import express from "express";
import next from "next";
import { join } from "path";

const result = dotenv.config();
if (result.error) {
  // tslint:disable-next-line no-console
  console.warn("Couldn't load .env file.");
}

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/service-worker.js", (req, res) => {
    const filePath = join(__dirname, "..", ".next", req.path);
    return app.serveStatic(req, res, filePath);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err: any) => {
    if (err) {
      throw err;
    }
    // tslint:disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
