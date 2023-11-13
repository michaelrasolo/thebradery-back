const pool = require("../config/db");

/* GET PRODUCT BY ID */
async function productById(productId) {
  const rows = await pool.query(
      `
      SELECT *
      FROM products
      WHERE id =?`,
      [productId]
      );
      // console.log(rows[0][0]);
      return rows[0][0];
    }
    
    /* GET ALL PRODUCTS */
    async function allProducts() {
      const rows = await pool.query(`
      SELECT *
      FROM products`);
  // console.log(rows[0]);
  return rows[0];
}
    /* GET ALL PRODUCTS BY CATEGORY */
    async function productsByCat(category) {
      
      const rows = await pool.query(`
      SELECT *
      FROM products
      WHERE category =?`,[category]);
  console.log(rows[0]);
  return rows[0];
}
const x = "Hauts"
// productsByCat(x)
/* INVENTORY UPDATE BASED ON THE ORDER */
async function updateInventory(productId, orderQuantity) {
  try {
    // 
    const rows = await pool.query(
      `
    SELECT *
    FROM products
    WHERE id =?`,
      [productId]
    );
    const inventory = rows[0][0].inventory;
    // Check stock availabilityy
    if (orderQuantity > inventory) {
      throw new Error("Insufficient inventory");
    }
    // Calc and update
    const newInventory = inventory - orderQuantity;
    await pool.query(
      `UPDATE products
        SET inventory = ?
        WHERE id = ?`,
      [newInventory, productId]
    );
    console.log(inventory, orderQuantity, newInventory);
    return { success: true, newInventory };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
}
// updateInventory(1,5)

module.exports = {
  productById,
  allProducts,
  updateInventory,
  productsByCat
};
