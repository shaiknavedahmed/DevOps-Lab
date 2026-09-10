import { useState } from "react";

function MarksForm({ student, onMarksUpdate }) {
  const [marks, setMarks] = useState(student.marks);

  const handleChange = (subject, value) => {
    let mark = Number(value);

    if (mark < 0) mark = 0;
    if (mark > 100) mark = 100;

    const updatedMarks = {
      ...marks,
      [subject]: mark,
    };

    setMarks(updatedMarks);
    onMarksUpdate(updatedMarks);
  };

  return (
    <div className="marks-form">
      <h2>Enter Marks</h2>

      <h3>{student.name}</h3>

      {student.subjects.map((subject) => (
        <div key={subject}>
          <label>{subject}: </label>

          <input
            type="number"
            min="0"
            max="100"
            value={marks[subject]}
            onChange={(e) =>
              handleChange(subject, e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
}

export default MarksForm;