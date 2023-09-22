const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { getAllProducts } = require("./controllers/productController");
const router = require("./routes/productRoutes");
const productRouter = require("./routes/productRoutes");
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
