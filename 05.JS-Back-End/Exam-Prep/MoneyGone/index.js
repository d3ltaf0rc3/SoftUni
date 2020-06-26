const express = require("express");
const { connectToDB } = require("./config/database");
const expressConfig = require("./config/express");
const indexRouter = require("./routes/index");
const expensesRouter = require("./routes/expenses");
const app = express();
const PORT = 3000;
expressConfig(app);

app.use("/expenses", expensesRouter);
app.use("/", indexRouter);

connectToDB();
app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
});