const express = require("express");
const cubeRouter = require("./routes/cubes");
const userRouter = require("./routes/user");
const { connect } = require("./config/database");
const app = express();
const PORT = 3000;

connect();

app.use(express.json());
app.use("/api/cubes", cubeRouter);
app.use("/api/", userRouter);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Rest API is running on port ${PORT}`);
});