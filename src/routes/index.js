import express from "express";
import product from "./productRoutes.js"
import orderItem from "./orderItemRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send
        ("Node.js com Express"));

    //app.use(express.json(), post, authors, user)
    app.use(express.json());


    app.use(product);
    app.use(orderItem);
}

export default routes;