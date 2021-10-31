import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    model: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    currentPrice: { type: Number, required: true },
    category: { type: String, required: true },
    countInStock: { type: Number, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    brandIcon: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
