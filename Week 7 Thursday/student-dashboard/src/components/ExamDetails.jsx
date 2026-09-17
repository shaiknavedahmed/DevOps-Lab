export default function ExamDetails({ examDate, examName, room }) {
  return (
    <div className="exam-details">
      <h4>Upcoming Examination</h4>
      <p><strong>Exam:</strong> {examName}</p>
      <p><strong>Date:</strong> {examDate}</p>
      <p><strong>Room:</strong> {room}</p>
    </div>
  );
}