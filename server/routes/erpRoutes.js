const express = require('express');
const { getOrders, getCustomers, getInventory } = require('../controllers/erpController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/orders', protect, getOrders);
router.get('/customers', protect, getCustomers);
router.get('/inventory', protect, getInventory);

module.exports = router;
