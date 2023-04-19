const router = require("express").Router();
const { BadRequestError, UnauthorizedError } = require("../libs/custom-errors");

router.get("/", (_, res) => res.json({ message: "Express Async Errors App" }));

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError({ message: "Email and Password are required fields" });
  }

  res.status(201).json({ message: "Successfully Login." });
});

router.get("/profile", (req, res) => {
  const token = req.header("Authorization");
  if (!token) throw new UnauthorizedError({ message: "You are not authorized." });

  res.json({ username: "Jazim Abbas", email: "jazim@gmail.com" });
});

module.exports = router;
