const { USER } = require('../../models')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.create = async (req, res) => {
    try {
        const { full_name, email, mobile, password_hash, dob } = req.body;

        // hash the password before saving
        const hashedPassword = await bcrypt.hash(password_hash, 10); // saltRounds = 10

        const user = await User.create({
            full_name,
            email,
            mobile,
            password_hash: hashedPassword,
            dob
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user.user_id,
                full_name: user.full_name,
                email: user.email,
                mobile: user.mobile,
                dob: user.dob
            }
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { user_id, password } = req.body;

        // check if user exists
        const user = await User.findOne({ where: { user_id } });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // check password
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" });
        }

        // generate JWT token
        const token = jwt.sign(
            { id: user.user_id, email: user.email },
            process.env.JWT_SECRET || "mysecretkey", // keep secret in .env
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.user_id,
                full_name: user.full_name,
                email: user.email,
                mobile: user.mobile
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const user = await USER.findAll()
        res.status(200).json(user);

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await USER.findByPk(id);
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(400).json({ error: "Select User not found" })
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}