const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// CREATE
// ========================================================================

router.post("/", verifyTokenAndAdmin, async () => {
  const newProduct = new Product(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// HERE "PUT" METHOD IS UPDATING
// ========================================================================

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json("Changes Failed.Try again");
  }
});

//DELETE METHOD
// ========================================================================

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (error) {
    res.status(500).json("Problem deleting record: " + error.message);
  }
});

//GET INFO(PRODUCT) METHOD
// ========================================================================

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET INFO(ALL-PRODUCT) METHOD
// ========================================================================
router.get("/", async (req, res) => {
  const newQuery = req.query.new;
  const queryCatergory = req.query.catergory;

  try {
    let products;
    if (newQuery) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (queryCatergory) {
      products = await Product.find({
        categories: {
          $in: [queryCatergory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
});

module.exports = router;
