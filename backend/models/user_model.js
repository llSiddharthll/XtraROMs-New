import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Hashed password recommended
    pfp: { type: String, default: "https://api.dicebear.com/9.x/adventurer-neutral/svg6" }, // Default profile picture
    bio: { type: String, maxlength: 250 }, // Short user bio
    role: { type: String, enum: ["user", "admin", "moderator"], default: "user" }, // Role-based access
    social_links: {
        telegram: { type: String },
        github: { type: String },
        twitter: { type: String },
        website: { type: String },
    },
    uploaded_roms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rom" }], // ROMs uploaded by user
    liked_roms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rom" }], // ROMs liked by user
    created_at: { type: Date, default: Date.now }, // Timestamp for user creation
    updated_at: { type: Date, default: Date.now }, // Last profile update timestamp
    verified: { type: Boolean, default: false }, // Email verification status
    reset_password_token: { type: String }, // For password reset
    reset_password_expires: { type: Date }, // Expiry for password reset token
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;
