import { BaseRepository } from "./baseRepository.js";
import { orderItem } from "../models/OrderItem.js";

export class OrderItemRepository extends BaseRepository {
    constructor() {
        super(orderItem)
    }
}