const express = require("express");
const path = require("path");
const router = express.Router();
const { isAdmin } = require("../middleware/auth.middleware");

// 🔓 PUBLIC LOGIN PAGE
router.get("/login", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../Frontend/admin/login.html")
  );
});

// 🔐 PROTECTED DASHBOARD
router.get("/dashboard", isAdmin, (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../Frontend/admin/admin.html")
  );
});

module.exports = router;

