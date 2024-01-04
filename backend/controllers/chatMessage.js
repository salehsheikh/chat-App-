import chatMessage from "../models/chatMessage.js";
export const createMessage=async(req,res)=>{
    const newMessage= new chatMessage(req.body);
try {
    await newMessage.save();
    res.status(201).json(newMessage)
} catch (error) {
    res.status(409).json({
        message: error.message,
    });
    
}
};
export const getMessages=async(req,res)=>{
    try {
        const messages=await chatMessage.find({
            chatRoomId:req.params.chatRoomId,
        });
        res.status(200).json(messages);
    } catch (error) {
        res.status(409).json({
            message: error.message,
        });
    }
};