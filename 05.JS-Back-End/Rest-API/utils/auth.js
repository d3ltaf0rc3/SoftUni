const jwt = require("jsonwebtoken");

module.exports = {
    authenticate: (req, res, next) => {
        const authHeader = req.get("Authorization");
        if (!authHeader) {
            return res.status(401).send({
                message: "No authorization header provided!"
            });
        }
        const token = authHeader.split(" ")[1];
        try {
            jwt.verify(token, process.env.KEY);
            next();
        } catch (error) {
            return res.status(401).send({
                "message": "Wrong authorization token!"
            });
        }
    }
};