const { model, Schema } = require("mongoose");

const PaySchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  parcelId: {
    type: Array,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Payment = model("Payment", PaySchema);

module.exports = Payment;
