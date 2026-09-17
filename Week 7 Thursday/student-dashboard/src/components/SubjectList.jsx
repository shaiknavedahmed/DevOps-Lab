export default function SubjectList({ subjects }) {
  return (
    <div className="subject-list">
      <h4>Enrolled Subjects:</h4>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
}