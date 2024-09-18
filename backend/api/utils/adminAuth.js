const { verifyToken } = require("./jwt");

const adminAuth = (req, res, next) => {
    try {

        const token = req.headers.authorization;
        if (!token) throw new Error("Invalid token")
        const verify = verifyToken(token);
        next();
    } catch (error) {
        res.status(400).json({success: false, error: error.message})
    }
    
}
module.exports = adminAuth;