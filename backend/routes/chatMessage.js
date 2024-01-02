import {createMessage,getMessages} from "../controllers/chatMessage";
const express=require('express');
const router=express.Router();
router.post("/",createMessage);
router.get("/:chatRoomId",getMessages);