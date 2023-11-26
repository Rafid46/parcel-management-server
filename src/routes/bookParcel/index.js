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

module.exports = router;
