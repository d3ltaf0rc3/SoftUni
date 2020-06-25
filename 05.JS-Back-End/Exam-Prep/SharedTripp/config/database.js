const mongoose = require("mongoose");
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@softuni-hckfj.mongodb.net/sharedTrip?retryWrites=true&w=majority`;

module.exports = {
    connectToDB: function () {
        mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, err => {
            if (err) throw err;
            console.log("Successfully connected to DB!");
        });
    }
};