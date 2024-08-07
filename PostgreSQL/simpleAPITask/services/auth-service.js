const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const AccessToken = require('../utils/access-token')
const pool = require('../config/db')

const getUserByUsername = async username => {
    const res = await pool.query('select * from users u where u.username = $1 ', [username])
    return res.rows[0]
}

const addUser = async user => {
    const isExistingUser = await getUserByUsername(user.username)
    if (isExistingUser) {
        return { message: 'User already exists' }
    }
    user.password = await bcrypt.hash(user.password, 10)
    const res = await pool.query('INSERT INTO users (username,password) VALUES ($1, $2) RETURNING *', [user.username, user.password])
    return res.rows[0]
}

const loginUser = async (user) => {
    const userExists = await getUserByUsername(user.username)

    if (!userExists) {
        return { message: "User is not exist!" }
    }

    const passwordCheck = await bcrypt.compare(user.password, userExists.password)

    if (!passwordCheck) {
        return { message: "Password is inccorect!" }
    }

    const token = jwt.sign({ username: userExists.username }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
    const expireDate = new Date()
    expireDate.setHours(expireDate.getHours() + 1)
    const accessToken = new AccessToken(token, expireDate.toString())
    return { message: "Login Success!", data: accessToken }
}

module.exports = {
    loginUser,
    addUser
}