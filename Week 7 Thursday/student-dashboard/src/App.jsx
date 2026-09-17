import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import "./Dashboard.css";

const studentRecords = [
  {
    name: "Shaik Naved",
    roll: "23CS102PE405",
    branch: "CSE (AI)",
    year: "4th Year",
    subjects: ["DevOps & FullStack", "Deep Learning", "Cloud Architecture"],
    attendance: 88,
    exam: {
      name: "DevOps Mid-Term",
      date: "17.09.2026",
      room: "Lab 3"
    }
  },
  {
    name: "Rahul Sharma",
    roll: "23CS102PE406",
    branch: "CSE (AI)",
    year: "4th Year",
    subjects: ["DevOps & FullStack", "Natural Language Processing", "Cybersecurity"],
    attendance: 68,
    exam: {
      name: "DevOps Mid-Term",
      date: "17.09.2026",
      room: "Lab 3"
    }
  }
];

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="card-grid">
        {studentRecords.map((student, idx) => (
          <StudentCard key={idx} student={student} />
        ))}
      </main>
      <Footer />
    </div>
  );
}