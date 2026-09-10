function Student({ student, onSelect }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p>ID: {student.id}</p>
      <p>Department: {student.department}</p>

      <button onClick={() => onSelect(student)}>
        Select Student
      </button>
    </div>
  );
}

export default Student;