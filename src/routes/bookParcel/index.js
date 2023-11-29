const BookParcel = require("../../models/book");
const router = require("express").Router();
router.post("/health/bookParcel", async (req, res) => {
  const data = req.body;
  const result = await BookParcel.insertMany(data);
  res.send(result);
});
// get
router.get("/health/bookParcel", async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const result = await BookParcel.find(query);
  res.send(result);
});
//
router.get("/health/bookParcel/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const filter = { _id: id };
  const cursor = await BookParcel.find(filter);
  res.send(cursor);
});
// update
router.patch("/health/bookParcel/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const filter = { _id: id };
  const updatedDoc = {
    status: "on the way",
  };
  const result = await BookParcel.findOneAndUpdate(filter, updatedDoc);
  console.log(updatedDoc);
  res.send(result);
});
// deliver
router.patch("/health/bookParcel/cancel/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const filter = { _id: id };
  const updatedDoc = {
    status: "cancel",
  };
  const result = await BookParcel.findOneAndUpdate(filter, updatedDoc);
  console.log(updatedDoc);
  res.send(result);
});
// cancel
router.patch("/health/bookParcel/deliver/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const filter = { _id: id };
  const updatedDoc = {
    status: "delivered  returned",
  };
  const result = await BookParcel.findOneAndUpdate(filter, updatedDoc);
  console.log(updatedDoc);
  res.send(result);
});
router.post("/health/bookParcel/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const data = req.body.deliveryMan;
  const result = await BookParcel.updateOne(data, filter, Man);
  res.send(result);
});
// update
router.patch("/health/bookParcelUpdate/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const data = req.body;
  const updateParcel = {
    number: data.number,
    parcelType: data.parcelType,
    receiverName: data.receiverName,
    address: data.address,
    bookingDate: data.bookingDate,
    requestedDeliveryDate: data.requestedDeliveryDate,
    deliveryAddressLat: data.deliveryAddressLat,
    deliveryAddressLong: data.deliveryAddressLong,
  };
  const result = await BookParcel.findOneAndUpdate(filter, updateParcel);
  res.send(result);
});
module.exports = router;
