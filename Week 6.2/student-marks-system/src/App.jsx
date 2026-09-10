import { useState } from "react";

import StudentList from "./components/StudentList";
import MarksForm from "./components/MarksForm";
import Result from "./components/Result";

import "./App.css";

function App() {
  // Student details
  const [students, setStudents] = useState([
    {
      id: "S101",
      name: "Rahul",
      department: "CSE",
      subjects: ["Java", "React", "DBMS"],
      marks: {
        Java: 80,
        React: 75,
        DBMS: 85,
      },
    },
    {
      id: "S102",
      name: "Priya",
      department: "AI & ML",
      subjects: ["Java", "React", "DBMS"],
      marks: {
        Java: 90,
        React: 88,
        DBMS: 92,
      },
    },
    {
      id: "S103",
      name: "Arjun",
      department: "ECE",
      subjects: ["Java", "React", "DBMS"],
      marks: {
        Java: 65,
        React: 70,
        DBMS: 68,
      },
    },
  ]);

  // Selected student
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Select a student
  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  // Update marks
  const handleMarksUpdate = (updatedMarks) => {
    const updatedStudents = students.map((student) =>
      student.id === selectedStudent.id
        ? {
            ...student,
            marks: updatedMarks,
          }
        : student
    );

    setStudents(updatedStudents);

    setSelectedStudent({
      ...selectedStudent,
      marks: updatedMarks,
    });
  };

  return (
    <div className="app">

      <h1>Student Marks Management System</h1>

      {/* Student List */}
      <StudentList
        students={students}
        onSelect={handleSelectStudent}
      />

      {/* Selected Student */}
      {selectedStudent && (
        <div className="management-section">

          <h2>
            Selected Student: {selectedStudent.name}
          </h2>

          {/* Marks Form */}
          <MarksForm
            student={selectedStudent}
            onMarksUpdate={handleMarksUpdate}
          />

          {/* Result */}
          <Result
            marks={selectedStudent.marks}
          />

        </div>
      )}

    </div>
  );
}

export default App;