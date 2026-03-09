function calculateGPA() {
    let totalPoints = 0;
    let totalCredits = 0;
 
    const courses = document.querySelectorAll('.course-row'); 
    
    courses.forEach(row => {
        const grade = parseFloat(row.querySelector('.grade-input').value);
        const credit = parseFloat(row.querySelector('.credit-input').value);

        if (!isNaN(grade) && !isNaN(credit)) {
            totalPoints += grade * credit;
            totalCredits += credit;
        }
    });

    if (totalCredits > 0) {
        const gpa = totalPoints / totalCredits;
        document.getElementById('result').innerText = "Your GPA is: " + gpa.toFixed(2);
    } else {
        alert("Please enter valid grades and credits.");
    }
}
