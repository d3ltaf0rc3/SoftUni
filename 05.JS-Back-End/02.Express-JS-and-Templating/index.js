const env = process.env.NODE_ENV || 'development';

const mongoose = require("mongoose");
const config = require('./config/config')[env];
const express = require('express');
const indexRouter = require("./routes/index");
const app = express();

mongoose.set("useFindAndModify", false);

mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) throw err;
    console.log("Database is UP and RUNNING!");
});

require('./config/express')(app);

app.use("/", indexRouter);

app.listen(config.port, console.log(`Listening on port ${config.port}!`));