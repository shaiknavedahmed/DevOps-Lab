import Grade from "./Grade";

function Result({ marks }) {
  const values = Object.values(marks);

  const total = values.reduce(
    (sum, mark) => sum + Number(mark),
    0
  );

  const average =
    values.length > 0 ? total / values.length : 0;

  return (
    <div className="result">
      <h2>Result</h2>

      <p>
        <strong>Total Marks:</strong> {total}
      </p>

      <p>
        <strong>Average:</strong> {average.toFixed(2)}
      </p>

      <Grade average={average} />
    </div>
  );
}

export default Result;