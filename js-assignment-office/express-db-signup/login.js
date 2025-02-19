app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, results) => {
        if (err) return res.status(500).json({ error: "Database error: " + err.message });

        if (results.length === 0) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const user = results[0];

        // Compare passwords using bcrypt
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ error: "Error comparing passwords" });

            if (!isMatch) {
                return res.status(401).json({ error: "Invalid email or password" });
            }

            res.json({ message: "Login successful!" });
        });
    });
});
