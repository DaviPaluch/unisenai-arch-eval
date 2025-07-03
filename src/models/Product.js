import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Nome é obrigatório."],
        unique: false,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
    type: Number,
    required: [true, "Preço é obrigatório."],
    min: [0, "Preço não pode ser negativo."]
    },
    stock: {
        type: Number,
        required: [true, "Estoque é obrigatório."],
        min: [0, "Estoque não pode ser negativo."]
    }
}, {
    versionKey: false,
    timestamps: true
});

const product = mongoose.model("product", productSchema);

export {product, productSchema};