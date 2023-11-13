var express = require("express");
var router = express.Router();
const {
  createOrder,
  createOrderItems,
} = require("../controllers/orderController");
const {updateInventory} = require('../controllers/productController')

/* POST CREATE THE ORDER AND UPDATE INVENTORRY */
router.post("/", async function (req, res) {
  try {
    const params = req.body.cart;
    // Order creation and saving order id
    const orderDetails = await createOrder(params);
    const orderId = orderDetails.orderId;
    // Loop over items array to create orderItems
    let createdItems = [];
    for (let index = 0; index < params.items.length; index++) {
      const { productId, quantity } = params.items[index];
      const data = await createOrderItems(orderId, productId, quantity);
      // OrderItems infos in a variable as a result
      createdItems.push({
        orderItemid: data.insertId,
        orderId,
        productId,
        quantity,
        
      });
      // Update inventory of the product
      await updateInventory(productId,quantity)
    }
    return res.json({ orderDetails, createdItems });
  } catch (error) {
    console.error("Error in route:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
