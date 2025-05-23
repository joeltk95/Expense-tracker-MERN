//Bring model in
const Transaction = require('../models/Transaction');

//@desc Get all transactions
//@route GET /api/v1/transactions
//@access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

//@desc Add transaction
//@route POST /api/v1/transactions
//@access Public
exports.addTransactions = async (req, res, next) => {
  //send data from a client -> res.body.text / res.body.amount etc..
  //Need at body parser middleware in server js
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      //Put all the message into an array
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
      //console.log(err);
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server error',
      });
    }
  }
};

//@desc Delete transaction
//@route DELETE /api/v1/transactions/:id
//@access Public
exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(401).json({
        success: false,
        error: 'No transaction found',
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};
