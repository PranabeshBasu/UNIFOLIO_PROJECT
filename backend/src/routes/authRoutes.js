import { Router } from "express";
import { signup, verifyOtp, login } from "../controllers/authController.js";
import { authenticateJwt, authorizeRoles } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/signup", signup);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);

router.get("/student/protected", authenticateJwt, authorizeRoles("student"), (req, res) => {
  res.json({ message: "Student content", user: req.user });
});

router.get("/faculty/protected", authenticateJwt, authorizeRoles("faculty"), (req, res) => {
  res.json({ message: "Faculty content", user: req.user });
});

export default router;
