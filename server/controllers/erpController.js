const Order = require('../models/Orders');
const Customer = require('../models/Customers');
const Inventory = require('../models/Inventory');

// Fetch all orders
async function getOrders(req, res) {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
}

// Fetch all customers
async function getCustomers(req, res) {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customers' });
  }
}

// Fetch all inventory items
async function getInventory(req, res) {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inventory' });
  }
}

module.exports = { getOrders, getCustomers, getInventory };
