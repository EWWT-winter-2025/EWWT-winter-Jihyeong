import express from "express";
import { protectRoute } from './../middleward/auth.middleward.js';
import { signup, login, logout, checkAuth, signout } from './../controllers/auth.conroller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/signout", signout);

router.get("/check", protectRoute, checkAuth);

export default router;