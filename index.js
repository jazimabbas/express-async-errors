const express = require("express");

const app = express();
app.get("/", (_, res) => res.json({ message: "Express Async Errors App" }));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is listening on the PORT ${PORT}...`);
});
