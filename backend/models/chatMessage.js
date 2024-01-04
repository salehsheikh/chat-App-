import mongoose from "mongoose";
const chatMessageSchema=mongoose.Schema(
    {
        chatRoomId: String,
        sender: String,
        message: String,
    },
    {timestamps:true}
);
const chatMessage=mongoose.model("chatMessage",chatMessageSchema);
export default chatMessage;