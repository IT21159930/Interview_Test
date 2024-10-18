const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const testRouter = require("./routes/tests.js");
app.use("/test", testRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port number: ${PORT}`);
});
