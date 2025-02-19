const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt"); // Import bcrypt

const app = express();
app.use(cors()); // Allow frontend requests
app.use(bodyParser.json()); // Parse JSON data

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Your MySQL username
  password: "Abhinav@123", // Your MySQL password
  database: "signup-login-form", // Your database name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

// ✅ **Signup API - Store User Data with Hashed Password**
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        // Hash password before storing in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        db.query(sql, [name, email, hashedPassword], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Database error: " + err.message });
            }
            res.json({ message: "User registered successfully!" });
        });
    } catch (err) {
        res.status(500).json({ error: "Server error: " + err.message });
    }
});

// ✅ **Login API - Check User Credentials**
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: "Database error: " + err.message });

        if (results.length === 0) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const user = results[0];

        try {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ error: "Invalid email or password" });
            }

            res.json({ message: "Login successful!" });
        } catch (error) {
            return res.status(500).json({ error: "Error comparing passwords" });
        }
    });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
