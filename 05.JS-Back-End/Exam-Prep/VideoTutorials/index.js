const express = require("express");
const { connectToDB } = require("./config/database");
const expressConfig = require("./config/express");
const indexRouter = require("./routes/index");
const courseRouter = require("./routes/courses");
const app = express();
const PORT = 3000;

expressConfig(app);
connectToDB();

app.use("/", indexRouter);
app.use("/courses", courseRouter);

app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
});