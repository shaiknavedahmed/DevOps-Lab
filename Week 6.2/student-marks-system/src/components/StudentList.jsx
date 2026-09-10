import Student from "./Student";

function StudentList({ students, onSelect }) {
  return (
    <div>
      <h2>Students</h2>

      {students.map((student) => (
        <Student
          key={student.id}
          student={student}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default StudentList;