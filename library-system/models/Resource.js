import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    available: { type: Boolean, default: true },
    digitalUrl: { type: String }, // link to e-book
}, { timestamps: true });

export default mongoose.model("Resource", resourceSchema);
