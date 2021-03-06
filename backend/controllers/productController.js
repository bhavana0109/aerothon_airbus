import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await Product.find({ ...keyword });
  res.json(products);
});

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  //const product = products.find((p) => p._id === req.params.id);
  if (product) res.json(product);
  else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

// @desc   Delete single product
// @route  DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

// @desc   Create single product
// @route  POST /api/products
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "",
    price: 0,
    user: req.user._id,
    // image: "",
    brand: "",
    category: "",
    countInStock: 0,
    // numReviews: 0,
    // description: "",
    // benefits: "",
    // rating: 0,
    // reviews: [],
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc   Update single product
// @route  PUT /api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    // description,
    // image,
    brand,
    category,
    countInStock,
    // benefits,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    // product.description = description;
    // product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    // product.benefits = benefits;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
