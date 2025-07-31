 const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


class UserController {
  // POST /api/users/register
  static async register(req, res) {
    try {
      const { name, email, password  } = req.body;

      const userExist = await User.findOne({ email });
      if (userExist) return res.status(400).json({ message: "User already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword  });

      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // POST /api/users/login
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      console.log(user)
      if (!user || !(await bcrypt.compare(password, user.password)))
        return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "3d",
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "Lax",
          maxAge: 3 * 24 * 60 * 60 * 1000,
        })
        .json({ message: "Login successful", user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // POST /api/users/logout
  static async logout(req, res) {
    res.clearCookie("token").json({ message: "Logged out successfully" });
  }

  // GET /api/users/me
  static async getProfile(req, res) {
    try {
      const user = await User.findById(req.user.id).select("-password");
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserController;