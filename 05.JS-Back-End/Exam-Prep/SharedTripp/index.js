const express = require("express");
const config = require("./config/express");
const { connectToDB } = require("./config/database");
const app = express();
const indexRouter = require("./routes/index-router");
const PORT = 3000;

config(app);
app.use("/", indexRouter);

connectToDB();
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
});