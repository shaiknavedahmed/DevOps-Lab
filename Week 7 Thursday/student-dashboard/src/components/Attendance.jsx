export default function Attendance({ percentage }) {
  const isEligible = percentage >= 75;

  return (
    <div className="attendance-box">
      <p><strong>Attendance:</strong> {percentage}%</p>
      <p>
        <strong>Status: </strong> 
        <span className={isEligible ? "status-eligible" : "status-ineligible"}>
          {isEligible ? "Eligible" : "Not Eligible"}
        </span>
      </p>
    </div>
  );
}