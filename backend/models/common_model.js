import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

const LikeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const CommentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

const Device = mongoose.model("Device", DeviceSchema);
const Like = mongoose.model("Like", LikeSchema);
const Comment = mongoose.model("Comment", CommentSchema);

export {Device, Like, Comment}