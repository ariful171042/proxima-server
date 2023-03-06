require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const projectRoutes = require("./routes/projectRoute");
const userRoute = require("./routes/userRoute");

//express app
const app = express();

//Port
const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/projects", projectRoutes);
app.use("/api/user", userRoute);

//mongodb
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //Listen for requests
    app.listen(port, () => {
      console.log(` connected to mongo and Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
