const jwt = require('jsonwebtoken');

const authUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.redirect('/auth/login');
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.redirect('/auth/login'); 
        } else {
            req.user = user;
            next();
        }
    });
};

module.exports = authUser;
