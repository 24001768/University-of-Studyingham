import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    resourceId: { type: mongoose.Schema.Types.ObjectId, ref: "Resource", required: true },
    borrowDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
    returnedDate: { type: Date, default: null },
}, { timestamps: true });

export default mongoose.model("Borrow", borrowSchema);
