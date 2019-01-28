import nextRoutes from "@yolkai/next-routes";

const routes = nextRoutes().add("dynamic", "/dynamic/:slug");

export const Link = routes.Link;
export const Router = routes.Router;
export default routes;
