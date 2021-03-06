const mongoose = require("mongoose");
const { dbUrl } = require("./config");

mongoose.set("useFindAndModify", false);
mongoose.set('useCreateIndex', true);

function connect() {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) throw err;
        console.log("Connected to database!");
    });
}

module.exports = {
    connect
};