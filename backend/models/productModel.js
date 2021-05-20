import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    // image: {
    //   type: String,
    // },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      defualt: 0,
    },
    countInStock: {
      type: Number,
      required: false,
      default: 0,
    },
    category: {
      type: String,
      required: false,
    },
    // description: {
    //   type: String,
    // },
    // rating: {
    //   type: Number,
    // },
    // benefits: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
