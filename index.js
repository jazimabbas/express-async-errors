const express = require("express");
require("express-async-errors");
const unhandleExceptions = require("./middlewares/unhandle-exceptions");
const { BadRequestError, UnauthorizedError } = require("./libs/custom-errors");

const app = express();
app.use(express.json());

app.get("/", (_, res) => res.json({ message: "Express Async Errors App" }));
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError({ message: "Email and Password are required fields" });
  }

  res.status(201).json({ message: "Successfully registered." });
});

app.get("/profile", (req, res) => {
  const token = req.header("Authorization");
  if (!token) throw new UnauthorizedError({ message: "You are not authorized." });

  res.json({ username: "Jazim Abbas", email: "jazim@gmail.com" });
});

app.use(unhandleExceptions);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App is listening on the PORT ${PORT}...`));
