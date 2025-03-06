import mongoose from "mongoose";

const ModSchema = new mongoose.Schema({
    name: { type: String, required: true },
    android: { type: String, required: true },
    devices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Device" }],
    credits: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    details: { type: String, required: true },
    upload_date: { type: Date, default: Date.now },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    uploaded_by: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    slug: { type: String, required: true, unique: true },
    rating: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 },
    status: { type: String, enum: ["Stable", "Beta", "Alpha"], default: "Stable" },
    size: { type: String, required: true }
});


const Mod = mongoose.model("Mod", ModSchema);

export default Mod ;
