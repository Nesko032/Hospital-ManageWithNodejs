import express from "express";
import getHomePage from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", getHomePage.getHomePage);
    router.get("/crud", getHomePage.getCRUD);

    router.post("/post-crud", getHomePage.postCRUD);
    router.get("/get-crud", getHomePage.displayGetCRUD);
    router.get("/update-crud", getHomePage.getUpdateCRUD);

    router.post("/put-crud", getHomePage.putCRUD);
    router.get("/delete-crud", getHomePage.deleteCRUD);

    return app.use("/", router);
};

module.exports = initWebRoutes;
