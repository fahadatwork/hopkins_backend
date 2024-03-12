const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();


exports.PasswordHashMatched = async (password, hashed_password) => {
    try {
        const isMatched = await bcrypt.compare(password, hashed_password);
        return isMatched;
    } catch (error) {
        console.error("Error comparing passwords:", error);
        return false; // Return false in case of error
    }
}

exports.SignToken = (payload) => {

    const secret_key = process.env.JWT_SECRET;

    return jwt.sign(payload, secret_key, {expiresIn : '1h'})
}