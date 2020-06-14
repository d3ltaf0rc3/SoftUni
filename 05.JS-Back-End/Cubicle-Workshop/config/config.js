module.exports = {
    development: {
        port: process.env.PORT || 3000,
        dbUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@softuni-hckfj.mongodb.net/cube?retryWrites=true&w=majority`
    },
    production: {}
};