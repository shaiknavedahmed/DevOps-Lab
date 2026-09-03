const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

const students = [
    {
        id: 1,
        name: "Rahul",
        email: "rahul@gmail.com",
        department: "CSE",
        marks: 85
    },
    {
        id: 2,
        name: "Priya",
        email: "priya@gmail.com",
        department: "ECE",
        marks: 90
    }
];

// View student information
router.get("/students", authenticateToken, (req, res) => {
    res.json({
        message: "Student information",
        students: students
    });
});

// Update student information
router.put("/students/:id", authenticateToken, (req, res) => {

    // Only Faculty and Admin can update
    if (req.user.role !== "faculty" && req.user.role !== "admin") {
        return res.status(403).json({
            message: "Access denied. Faculty or Admin only."
        });
    }

    const id = parseInt(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    Object.assign(student, req.body);

    res.json({
        message: "Student updated successfully",
        student: student
    });
});

module.exports = router;