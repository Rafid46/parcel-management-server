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
router.post("/health/bookParcel/onTheWay/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const filter = { _id: id };
  const updatedDoc = {
    status: "on the way",
  };
  const result = await BookParcel.insertOne(filter, updatedDoc);
  console.log(updatedDoc);
  res.send(result);
});
router.patch("/health/bookParcel/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const data = req.body;
  const Man = {
    deliveryMan: data.deliveryMan,
  };
  const result = await BookParcel.findOneAndUpdate(data, filter, Man);
  res.send(result);
});
module.exports = router;
