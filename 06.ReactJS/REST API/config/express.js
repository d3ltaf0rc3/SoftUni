const cookieParser = require('cookie-parser');
const express = require("express");
const cors = require('cors');
const secret = 'secret';

module.exports = (app) => {
    app.use(cors({
        exposedHeaders: "Authorization",
        credentials: true,
        origin: "http://localhost:3000"
    }));

    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());
    app.use(cookieParser(secret));
};