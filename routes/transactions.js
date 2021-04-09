const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require('../controllers/transactions');

///api/v1/transactions
router.route('/').get(getTransactions).post(addTransactions);

///api/v1/transactions/:id
router.route('/:id').delete(deleteTransactions);

module.exports = router;
