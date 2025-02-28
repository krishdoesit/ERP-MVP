const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

// 🔥 Force Mongoose to use "inventory" collection
module.exports = mongoose.model('Inventory', InventorySchema, 'inventory');