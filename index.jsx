import { useState } from "react";

export default function GPACalculator() {
  const [subjects, setSubjects] = useState([
    { name: "Nepali", credit: 3, grade: "" },
    { name: "English", credit: 4, grade: "" },
    { name: "Math", credit: 5, grade: "" },
    { name: "Physics", credit: 5, grade: "" },
    { name: "Chemistry", credit: 5, grade: "" },
    { name: "Computer", credit: 5, grade: "" },
  ]);

  const gradeToPoint = (grade) => {
    const gradeMap = {
      "A+": 4.0, "A": 3.6, "B+": 3.2, "B": 2.8, "C+": 2.4, "C": 2.0, "D": 1.6, "NG": 0
    };
    return gradeMap[grade] || 0;
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    subjects.forEach(({ credit, grade }) => {
      if (grade) {
        totalCredits += credit;
        totalPoints += gradeToPoint(grade) * credit;
      }
    });
    return totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">GPA Calculator</h1>
      <div className="space-y-3">
        {subjects.map((subject, index) => (
          <div key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
            <span className="font-medium">{subject.name} ({subject.credit} hrs)</span>
            <select
              className="p-1 border rounded-md"
              value={subject.grade}
              onChange={(e) => {
                const newSubjects = [...subjects];
                newSubjects[index].grade = e.target.value;
                setSubjects(newSubjects);
              }}
            >
              <option value="">Select Grade</option>
              <option value="A+">A+ (Outstanding)</option>
              <option value="A">A (Excellent)</option>
              <option value="B+">B+ (Very Good)</option>
              <option value="B">B (Good)</option>
              <option value="C+">C+ (Satisfactory)</option>
              <option value="C">C (Acceptable)</option>
              <option value="D">D (Basic)</option>
              <option value="NG">NG (Not Graded)</option>
            </select>
          </div>
        ))}
      </div>
      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        onClick={() => alert(`Your GPA is: ${calculateGPA()}`)}
      >
        Calculate GPA
      </button>
      <div className="mt-4 text-center text-xl font-semibold">
        Overall GPA: {calculateGPA()}
      </div>
    </div>
  );
}
