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
router.get("/health/bookParcel", async (req, res) => {
  const cursor = await BookParcel.find();
  res.send(cursor);
});
// update
router.patch("/health/bookParcel/onTheWay/:id", async (req, res) => {
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
router.patch("/health/bookParcel/:id", async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  console.log("id", id);
  console.log("data id", data);
  const filter = { _id: id };
  const Man = {
    $set: {
      deliveryMan: data.deliveryMan,
    },
  };
  console.log("filter id", filter);
  const result = await BookParcel.findOneAndUpdate(
    data,
    { new: true },
    filter,
    Man
  );
  res.send(result);
});
module.exports = router;
