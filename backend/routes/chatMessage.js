import { createMessage, getMessages } from "../controllers/chatMessage.js";
import express from 'express';
const router = express.Router();
router.post("/", createMessage);
router.get("/:chatRoomId", getMessages);
export default router;
