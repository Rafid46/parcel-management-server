const User = require("../../models/user");
const router = require("express").Router();
//   admin get
router.patch("/health/users/admin/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const filter = { _id: id };
  const updatedDoc = {
    role: "admin",
  };
  const result = await User.findOneAndUpdate(filter, updatedDoc);
  console.log(updatedDoc);
  res.send(result);
});
// make delivery man

router.patch("/health/users/deliveryMan/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const filter = { _id: id };
  const updatedDoc = {
    role: "deliveryMan",
  };
  const result = await User.findOneAndUpdate(filter, updatedDoc);
  console.log(updatedDoc);
  res.send(result);
});
module.exports = router;
