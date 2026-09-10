export default function StudentProfile({ name, roll, branch, year }) {
  return (
    <div className="student-profile">
      <h3>{name}</h3>
      <p><strong>Roll No:</strong> {roll}</p>
      <p><strong>Branch:</strong> {branch}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
}