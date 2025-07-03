// Data Transfer Object
export class ProductDTO {
    constructor(product) {
        this.id = product._id;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.stock = product.stock;
        this.createdAt = product.createdAt;
        this.updatedAt = product.updatedAt;
    }

    static fromRequest(body) {
        return {
            id: body.id,
            name: body.name,
            description: body.description,
            price: body.price,
            stock: body.stock
        };
    }
}