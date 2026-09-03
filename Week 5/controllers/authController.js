const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = [];

// REGISTER
const register = async (req, res) => {

    try {
        const {
            userId,
            name,
            email,
            password,
            role,
            department
        } = req.body;

        if (!userId || !name || !email || !password || !role || !department) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = users.find(
            user => user.email === email
        );

        if (existingUser) {
            return res.status(409).json({
                message: "Email already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = {
            userId,
            name,
            email,
            password: hashedPassword,
            role,
            department
        };

        users.push(user);

        res.status(201).json({
            message: "User registered successfully",
            user: {
                userId,
                name,
                email,
                role,
                department
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Registration failed"
        });
    }
};


// LOGIN
const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = users.find(
            user => user.email === email
        );

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                userId: user.userId,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        res.json({
            message: "Login successful",
            token: token
        });

    } catch (error) {
        res.status(500).json({
            message: "Login failed"
        });
    }
};


// PROFILE
const profile = (req, res) => {

    const user = users.find(
        user => user.userId === req.user.userId
    );

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json({
        userId: user.userId,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department
    });
};


module.exports = {
    users,
    register,
    login,
    profile
};