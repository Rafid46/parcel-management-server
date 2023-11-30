// const Admin = require("../../models/admin");
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

// router.get("/health/users", async (req, res) => {
//   const cursor = await User.find();
//   res.send(cursor);
// });
//   admin get
// router.patch("/health/users/admin:id", async (req, res) => {
//   await Admin.updateOne(
//     { _id: req.params.id },
//     {
//       $set: {
//         role: "admin",
//       },
//     }
//   ),
//     (err) => {
//       if (err) {
//         res.status(500).json({
//           error: "server side error",
//         });
//       } else {
//         res.status(200).json({
//           message: "success",
//         });
//       }
//     };

//   //   const { id } = req.params;
//   //   const filter = { _id: id };
//   //   const updatedDoc = {
//   //     $set: {
//   //       role: "admin",
//   //     },
//   //   };
//   //   const result = await Admin.updateOne(filter, updatedDoc);
//   //   const result = await Admin.updateOne(
//   //     { _id: mongoose.Types.ObjectId(id) },
//   //     { $set: { role: "admin" } }
//   //   );
// });
router.get("/health/users", async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const result = await User.find(query);
  res.send(result);
});
router.patch("/health/users/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const profileInfo = req.body;
  const Info = {
    photoURL: profileInfo.photoURL,
  };
  const result = await User.findOneAndUpdate(filter, Info);
  res.send(result);
});
router.patch("/health/users/deliUpdate/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const profileInfo = req.body;
  const Info = {
    deliveryman: profileInfo.deliveryMan,
  };
  const result = await User.findOneAndUpdate(filter, Info);
  res.send(result);
});
//
module.exports = router;
