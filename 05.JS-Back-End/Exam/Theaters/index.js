const express = require("express");
const { connectToDB } = require("./config/database");
const expressConfig = require("./config/express");
const indexRouter = require("./routes/index");
const playsRouter = require("./routes/plays");
const app = express();
const PORT = 3000;

expressConfig(app);
connectToDB();

app.use("/plays", playsRouter);
app.use("/", indexRouter);

app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
});