import * as dotenv from "dotenv";
import * as express from "express";
import * as next from "next";
import * as path from "path";
import routes from "../app/router";

const result = dotenv.config();
if (result.error) {
  // tslint:disable-next-line no-console
  console.warn("Couldn't load .env file.");
}

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = routes.getRequestHandler(app);
const server = express();

app.prepare().then(() => {
  server
    .get("/service-worker.js", (req, res) => {
      const filePath = path.join(__dirname, "..", ".next", req.path);
      return app.serveStatic(req, res, filePath);
    })
    .use(handle)
    .listen(port, (err: any) => {
      if (err) {
        throw err;
      }
      // tslint:disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
});
