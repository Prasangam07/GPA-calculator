// scripts.js

const subjects = [
    { name: "Nepali", credit: 3 },
    { name: "English", credit: 4 },
    { name: "Math", credit: 5 },
    { name: "Physics", credit: 5 },
    { name: "Chemistry", credit: 5 },
    { name: "Computer", credit: 5 }
];

const gradeToPoint = {
    "A+": 4.0, "A": 3.6, "B+": 3.2, "B": 2.8, "C+": 2.4, "C": 2.0, "D": 1.6, "NG": 0
};

function createSubjectFields() {
    const container = document.getElementById("subjects");
    subjects.forEach((subject, index) => {
        const div = document.createElement("div");
        div.className = "subject";
        div.innerHTML = `
            <span>${subject.name} (${subject.credit} hrs)</span>
            <select id="grade-${index}">
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
        `;
        container.appendChild(div);
    });
}

function calculateGPA() {
    let totalCredits = 0;
    let totalPoints = 0;
    subjects.forEach((subject, index) => {
        const grade = document.getElementById(`grade-${index}`).value;
        if (grade) {
            totalCredits += subject.credit;
            totalPoints += gradeToPoint[grade] * subject.credit;
        }
    });
    const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
    document.getElementById("gpa-result").innerText = `Overall GPA: ${gpa}`;
}

createSubjectFields();
