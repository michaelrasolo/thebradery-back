const pool = require("../config/db");

/* ORDER CREATION*/
async function createOrder(params) {
  const { customer_name, customer_email, total_price, items } = params;
  const [orderResult] = await pool.execute(
    `
      INSERT INTO Orders(order_date,
        total_price,
        customer_email,
        customer_name)
        VALUES (CURRENT_TIMESTAMP, ?, ?, ?)
        `,
    [total_price, customer_email, customer_name]
  );

  const orderId = orderResult.insertId;
  return { result: orderResult, orderId };
}

/* ORDER ITEM CREATION*/
async function createOrderItems(orderId, productId, quantity) {
  const [orderItemResult] = await pool.execute(
    `
        INSERT INTO Orderitems(order_id,
          product_id,
          quantity)
        VALUES (?, ?, ?)
      `,
    [orderId, productId, quantity]
  );
  return orderItemResult;
}
module.exports = {createOrder,createOrderItems};
