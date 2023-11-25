const express = require("express");
const globalErrorHandler = require("./utils/globalErrorHandler");
const applyMiddleware = require("./middlewares/applyMiddleware");
const app = express();
const port = process.env.PORT || 5020;

const connectDB = require("./db/connectDB");
// const authRoutes = require("./routes/authentication/index");
const usersRoutes = require("./routes/Users");
const User = require("./models/user");
applyMiddleware(app);

// app.use(authRoutes);
// app.use(serviceRoutes);
app.use(usersRoutes);
app.get("/health", (req, res) => {
  res.send("Server is running");
});
app.get("/users", async (req, res) => {
  const result = await User.find().toArray();
  res.send(result);
});
// handling all (get,post,update,delete.....) errors.
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

main();
