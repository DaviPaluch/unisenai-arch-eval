import { BaseRepository } from "./baseRepository.js";
import { product } from "../models/Product.js";

export class ProductRepository extends BaseRepository {
    constructor() {
        super(product)
    }
}