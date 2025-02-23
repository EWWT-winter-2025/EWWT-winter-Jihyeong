import express from 'express';
import { newgroup, showGroupName, addNewMember, showGroupInfo, showAllMember } from '../controllers/group.controller.js';

const router = express.Router();

router.post("/new", newgroup);
router.get("/name", showGroupName);
router.get("/groupInfo", showGroupInfo);// 한 개의 그룹 정보 보이기
router.post("/new-member", addNewMember);// 멤버 추가하기
router.get("/allMember", showAllMember);// 한 개의 그룹 멤버 모두 보이기

export default router;