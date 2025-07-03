import express from "express"
import OrderItemController from "../controllers/orderItemController.js"

const routes = express.Router();

routes.get("/orderItem", OrderItemController.getAllOrderItems);
routes.post("/orderItem", OrderItemController.createOrderItem);
routes.put("/orderItem/:id", OrderItemController.updateOrderItem);
routes.get("/orderItem/:id", OrderItemController.getOrderItemById);
routes.delete("/orderItem/:id", OrderItemController.deleteOrderItem);


export default routes;


