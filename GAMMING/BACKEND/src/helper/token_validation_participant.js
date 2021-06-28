const jwt = require("jsonwebtoken");
module.exports = {
    checkToken: (req, res, next) => {
        
        let token = req.get("authorization");
        if (token){
            // Remove Bearer from string
            token = token.slice(7);
            jwt.verify(token, process.env.JWT_KEY_PARTICIPANT, (err, decoded) => {
                if(err){
                    return res.json({
                        success: 301,
                        message: "Unable to verify your identity!"
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                success: 0,
                message: "Access Denied! Unauthorized User"
            });
        }
    }
};