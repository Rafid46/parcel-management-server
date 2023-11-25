const User = require("../../models/user");
const router = require("express").Router();
router.post("/health/users", async (req, res) => {
  const user = req.body;
  const query = { email: user.email };
  const existingUser = await User.findOne(query);
  if (existingUser) {
    return res.send({ message: "user already exist", insertedId: null });
  }
  const result = await User.insertMany(user);
  res.send(result);
});

router.get("/health/users", async (req, res) => {
  const cursor = await User.find();
  res.send(cursor);
});
module.exports = router;
