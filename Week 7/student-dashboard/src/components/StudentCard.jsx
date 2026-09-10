import { useState } from "react";
import StudentProfile from "./StudentProfile";
import SubjectList from "./SubjectList";
import Attendance from "./Attendance";
import ExamDetails from "./ExamDetails";

export default function StudentCard({ student }) {
  const [showDetails, setShowDetails] = useState(false);

  // Get initials for profile badge
  const initials = student.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className={`student-card ${showDetails ? "is-expanded" : ""}`}>
      <div className="card-top">
        <div className="avatar">{initials}</div>
        <div className="card-header-info">
          <StudentProfile 
            name={student.name} 
            roll={student.roll} 
            branch={student.branch} 
            year={student.year} 
          />
        </div>
      </div>

      <button 
        className={`profile-btn ${showDetails ? "btn-active" : ""}`} 
        onClick={() => setShowDetails(!showDetails)}
      >
        <span>{showDetails ? "Hide Full Profile" : "View Full Profile"}</span>
        <span className="arrow">{showDetails ? "▲" : "▼"}</span>
      </button>

      {showDetails && (
        <div className="expanded-details">
          <SubjectList subjects={student.subjects} />
          <Attendance percentage={student.attendance} />
          <ExamDetails 
            examName={student.exam.name} 
            examDate={student.exam.date} 
            room={student.exam.room} 
          />
        </div>
      )}
    </div>
  );
}