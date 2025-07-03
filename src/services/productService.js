import { ProductRepository } from "../repositories/productRepository.js";
import { ProductDTO } from "../dtos/productDTO.js";


export class ProductService {
    constructor() {
        this.ProductRepository = new ProductRepository();
    }

    createProduct = async (ProductData) => {
        const Product = ProductDTO.fromRequest(ProductData);
        return await this.ProductRepository.create(Product);
    }

    getAllProduct = async () => {
        return await this.ProductRepository.findAll();
    }
    getProductById = async (id) => {
        const foundProduct = await this.ProductRepository.findById(id);
        if (!foundProduct) {
            throw new Error("Produto não encontrado!")
        }
        return foundProduct
    }
    updateProduct = async (id, ProductData) => {
        const updatedProduct = await this.ProductRepository.update(id, ProductData);
        if (!updatedProduct) {
            throw new Error("Produto não encontrado!")
        }
        return updatedProduct
    }
    deleteProduct = async (id) => {
        const deleteProduct = await this.ProductRepository.delete(id);
        if (!deleteProduct) {
            throw new Error("Produto não encontrado!")
        }
        return deleteProduct
    }

}
