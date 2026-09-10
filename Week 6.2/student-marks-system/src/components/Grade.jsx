function Grade({ average }) {
  let grade;

  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  return (
    <div>
      <h3>Grade: {grade}</h3>

      <p>
        Status: {average >= 40 ? "PASS" : "FAIL"}
      </p>
    </div>
  );
}

export default Grade;