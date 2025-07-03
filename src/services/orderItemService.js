import { OrderItemRepository } from "../repositories/orderItemRepository.js";
import { OrderItemDTO } from "../dtos/orderItemDTO.js";


export class OrderItemService {
    constructor() {
        this.OrderItemRepository = new OrderItemRepository();
    }

    createOrderItem = async (OrderItemData) => {
        const OrderItem = OrderItemDTO.fromRequest(OrderItemData);
        return await this.OrderItemRepository.create(OrderItem);
    }

    getAllOrderItem = async () => {
        return await this.OrderItemRepository.findAll();
    }
    getOrderItemById = async (id) => {
        const foundOrderItem = await this.OrderItemRepository.findById(id);
        if (!foundOrderItem) {
            throw new Error("Item do pedido não encontrado!")
        }
        return foundOrderItem
    }
    updateOrderItem = async (id, OrderItemData) => {
        const updatedOrderItem = await this.OrderItemRepository.update(id, OrderItemData);
        if (!updatedOrderItem) {
            throw new Error("Item do pedido não encontrado!")
        }
        return updatedOrderItem
    }
    deleteOrderItem = async (id) => {
        const deleteOrderItem = await this.OrderItemRepository.delete(id);
        if (!deleteOrderItem) {
            throw new Error("Item do pedido não encontrado!")
        }
        return deleteOrderItem
    }

}
