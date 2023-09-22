const express = require("express");
const {
  getAllProducts,
  insertProduct,
} = require("../controllers/productController");
const router = express.Router();

router.get("/", getAllProducts);
router.post("/", insertProduct);

const productRouter = router;

module.exports = productRouter;
