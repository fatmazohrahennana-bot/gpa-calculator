function exportToCSV() {
    
    const name = document.querySelector('input[placeholder="zahra"]').value || "Student";
    const semester = document.querySelector('input[placeholder="licence2"]').value || "Semester";
    const gpaResult = document.getElementById('result').innerText;

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Name,Semester,GPA\n";
    csvContent += ${name},${semester},${gpaResult}\n;

    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "gpa_results.csv");
    document.body.appendChild(link);

    link.click(); 
}
