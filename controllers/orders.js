const Order = require('../models/order');
//const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  orders,
  deleteOrder,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id); 
  res.json(cart);
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty); 
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save(); 
  res.json(cart);
}

async function orders(req, res) {
    const orders =await Order.find({})
    res.send(orders)
}

async function deleteOrder(req, res) {
  console.log("apple")
  try {
    const orderId = req.params.orderId;
    await Order.findByIdAndDelete(orderId);
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete order' });
  }
}
