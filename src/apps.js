const express = require("express");
const globalErrorHandler = require("./utils/globalErrorHandler");
const applyMiddleware = require("./middlewares/applyMiddleware");
const app = express();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const connectDB = require("./db/connectDB");
// const authRoutes = require("./routes/authentication/index");
const usersRoutes = require("./routes/Users");
const adminRoutes = require("./routes/admin");
const bookRoutes = require("./routes/bookParcel");
const PaymentRoutes = require("./routes/Payment");
applyMiddleware(app);

// app.use(authRoutes);
// app.use(serviceRoutes);
app.use(usersRoutes);
app.use(adminRoutes);
app.use(bookRoutes);
app.use(PaymentRoutes);
app.get("/health", (req, res) => {
  res.send("Server is running");
});
// app.get("/users", async (req, res) => {
//   const result = await User.find().toArray();
//   res.send(result);
// });
// handling all (get,post,update,delete.....) errors.
// stripe
// app.post("/create-payment-intent", async (req, res) => {
//   const { price } = req.body;
//   const amount = parseInt(price * 100);
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: amount,
//     currency: "usd",
//     payment_method_types: ["card"],
//   });
//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);
module.exports = app;
