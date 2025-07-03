// Data Transfer Object
export class OrderItemDTO {
    constructor(orderItem) {
        this.id = orderItem._id;
        this.productId = orderItem.productId; 
        this.quantity = orderItem.quantity;
        this.total = orderItem.total;
        this.createdAt = orderItem.createdAt;
        this.updatedAt = orderItem.updatedAt;
    }

    static fromRequest(body) {
        return {
            id: body.id,
            productId: body.productId,
            quantity: body.quantity,
            total: body.total
        };
    }
}