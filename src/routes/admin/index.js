const User = require("../../models/user");
const router = require("express").Router();
//   admin get
router.patch("/health/users/admin/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const filter = { _id: id };
  //   const user = await Admin.findById(filter);
  //   console.log(user);
  const updatedDoc = {
    role: "admin",
  };
  const result = await User.findOneAndUpdate(filter, updatedDoc);
  console.log(updatedDoc);
  res.send(result);
  //   const result = await Admin.updateOne(
  //     { _id: mongoose.Types.ObjectId(id) },
  //     { $set: { role: "admin" } }
  //   );
});

module.exports = router;
