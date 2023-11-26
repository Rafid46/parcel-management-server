const { model, Schema } = require("mongoose");

const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  parcelType: {
    type: String,
    required: true,
  },
  parcelWeight: {
    type: Number,
    required: true,
  },
  receiverName: {
    type: String,
    required: true,
  },
  receiverNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  requestedDeliveryDate: {
    type: Date,
    required: true,
  },
  deliveryAddressLat: {
    type: Number,
    required: true,
  },
  deliveryAddressLong: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const BookParcel = model("BookParcel", BookSchema);

module.exports = BookParcel;
