const express = require("express");
require("express-async-errors");
const routes = require("./routes");
const unhandleExceptions = require("./middlewares/unhandle-exceptions");

const app = express();
app.use(express.json());
app.use("/", routes);
app.use(unhandleExceptions);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App is listening on the PORT ${PORT}...`));
