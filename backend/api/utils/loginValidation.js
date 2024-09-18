
const user = process.env.ADMIN_LOGIN;
const pass = process.env.ADMIN_PASSWORD;

const loginValid = ( req, res, next) => {
    try {
        if (!req.body.user_id || !req.body.user_pass) throw new Error("Complete the fields")  
        const payload = { ...req.body };
        if (user == payload.user_id && pass == payload.user_pass) return next();
        throw new Error ("Invalid credentials")    
    } catch (error) {
        res.status(400).json({success: false, error: error.message});
    }
};
module.exports = loginValid;