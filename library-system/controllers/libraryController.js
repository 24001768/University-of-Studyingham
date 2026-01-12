import Resource from "../models/Resource.js";
import Borrow from "../models/Borrow.js";
import Student from "../models/Student.js";

/**
 * GET all digital resources (students only)
 */
export const getResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch resources" });
    }
};

/**
 * POST borrow a resource
 * Rules:
 * - Only students
 * - Only one active borrow per student
 * - Resource must be available
 * - Duration: 30 days
 */
export const borrowResource = async (req, res) => {
    try {
        const { resourceId } = req.body;

        const student = await Student.findOne({ userId: req.user.userId });
        if (!student) {
            return res.status(404).json({ message: "Student profile not found" });
        }

        const activeBorrow = await Borrow.findOne({
            studentId: student._id,
            returnedDate: null
        });

        if (activeBorrow) {
            return res.status(400).json({
                message: "You already have an active borrowed resource"
            });
        }

        const resource = await Resource.findById(resourceId);
        if (!resource) {
            return res.status(404).json({ message: "Resource not found" });
        }

        if (!resource.available) {
            return res.status(400).json({ message: "Resource is not available" });
        }

        const borrow = await Borrow.create({
            studentId: student._id,
            resourceId: resource._id,
            dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        });

        resource.available = false;
        await resource.save();

        res.status(201).json({
            message: "Resource borrowed successfully",
            borrow
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Borrowing failed" });
    }
};

/**
 * POST return a resource
 * - Student can only return their own borrowed resource
 */
export const returnResource = async (req, res) => {
    try {
        const { borrowId } = req.body;

        const student = await Student.findOne({ userId: req.user.userId });
        if (!student) {
            return res.status(404).json({ message: "Student profile not found" });
        }

        const borrow = await Borrow.findById(borrowId).populate("resourceId");
        if (!borrow) {
            return res.status(404).json({ message: "Borrow record not found" });
        }

        if (borrow.studentId.toString() !== student._id.toString()) {
            return res.status(403).json({ message: "Not authorized" });
        }

        if (borrow.returnedDate) {
            return res.status(400).json({ message: "Resource already returned" });
        }

        borrow.returnedDate = new Date();
        await borrow.save();

        borrow.resourceId.available = true;
        await borrow.resourceId.save();

        res.status(200).json({
            message: "Resource returned successfully",
            borrow
        });

    } catch (error) {
        res.status(500).json({ message: "Return failed" });
    }
};

/**
 * GET personal library history
 * - Only returns data for logged-in student
 */
export const getBorrowHistory = async (req, res) => {
    try {
        const student = await Student.findOne({ userId: req.user.userId });
        if (!student) {
            return res.status(404).json({ message: "Student profile not found" });
        }

        const history = await Borrow.find({ studentId: student._id })
            .populate("resourceId")
            .sort({ borrowDate: -1 });

        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch history" });
    }
};
