const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

const generateToken = payload => {
    return jwt.sign(payload, secretKey, { expiresIn: 7200 });
};

const verifyToken = token => {
        return payload = jwt.verify(token, secretKey)
}
module.exports = {
    generateToken,
    verifyToken
}