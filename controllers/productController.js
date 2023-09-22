const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produtos." });
  }
};

const insertProduct = async (req, res) => {
  try {
    const productCreated = await Product.create(req.body);
    res.status(200).json({ productCreated: productCreated });
  } catch (error) {
    res.status(500).json({ error: "Erro ao inserir produtos." });
  }
};

module.exports = { getAllProducts, insertProduct };
