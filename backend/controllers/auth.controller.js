const bcrypt = require("bcryptjs");

// TEMP ADMIN (later replace with DB)
const ADMIN = {
  username: "admin",
  password: bcrypt.hashSync("admin123", 10)
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (username !== ADMIN.username) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, ADMIN.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  req.session.isAdmin = true;
  req.session.username = username;
  console.log("SESSION AFTER LOGIN:", req.session); 
  res.json({ message: "Login successful" });
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("robotics-admin");
    res.json({ message: "Logged out" });
  });
};
