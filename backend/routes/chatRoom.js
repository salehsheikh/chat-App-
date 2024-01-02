const express = require("express");
import {
  createChatRoom,
  getChatRoomOfUser,
  getChatRoomOfUsers,
} from "../controllers/chatRoom";
const router = express.Router();
router.post("/", createChatRoom);
router.get("/:userId", getChatRoomOfUser);
router.get("/:firstUserId/:secondUserId", getChatRoomOfUsers);
