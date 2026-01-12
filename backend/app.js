require("dotenv").config();
const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session
app.use(
  session({
    name: "robotics-admin",
    secret: "robotics_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,        // 🔴 MUST be false on localhost
      sameSite: "lax"       // 🔴 REQUIRED
    }
  })
);


// Serve frontend
app.use(express.static(path.join(__dirname, "../Frontend")));


// Routes
const authRoutes = require("./routes/auth.routes");
const adminRoutes = require("./routes/admin.routes");


app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
