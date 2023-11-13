var express = require('express');
var router = express.Router();
const pool = require("../config/db");
const { productById, allProducts, productsByCat } = require('../controllers/productController');

/* GET ONE PRODUCT */
router.get('/id/:id', function(req, res) {
try {
    productById(req.params.id).then(data => {
      if (!data) {
        return res.json({data:"Product not found"})
      }
    return res.json({data})
})    
} catch (err) {
    throw err
}});

/* GET ALL PRODUCTS */
router.get('/', function(req, res) {
  try {
    allProducts().then(data => {
      return res.json({data})
    })    
  } catch (err) {
    throw err
  }});

  /* GET ALL PRODUCTS BY CATEGORY*/
router.get('/:category', function(req, res) {
  const cat = req.params.category
  try {
    productsByCat(cat).then(data => {
      return res.json({data})
    })    
  } catch (err) {
    throw err
  }});
  
  module.exports = router;
  