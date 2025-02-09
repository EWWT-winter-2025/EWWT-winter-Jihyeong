import express from 'express';
import { newgroup, showGroupName } from '../controllers/group.controller.js';

const router = express.Router();

router.post("/new", newgroup);
router.get("/name", showGroupName);

export default router;