import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: [true, "Referência ao produto é obrigatória."]
  },
  quantity: {
    type: Number,
    required: [true, "Quantidade é obrigatória."],
    min: [1, "A quantidade deve ser no mínimo 1."]
  },
  total: {
    type: Number,
    required: [true, "Total é obrigatório."],
    min: [0, "Total não pode ser negativo."]
  }
}, {
  versionKey: false,
  timestamps: true
});

const orderItem = mongoose.model("orderItem", orderItemSchema);

export { orderItem, orderItemSchema };
