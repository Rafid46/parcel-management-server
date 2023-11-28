const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
router.post("/health/create-payment-intent", async (req, res) => {
  const price = req.body.price;
  const amount = price * 100;
  console.log(amount);
  console.log(amount, "amount");
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({ clientSecret: paymentIntent.client_secret });
});
module.exports = router;
