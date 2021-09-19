require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const router = require("./src/route/index");
const errorMiddleware = require("./src/middlewares/error.middleware");
const app = express();

const { PORT } = process.env;

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use("/api", router);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("Server has been started on PORT ", PORT);
});
