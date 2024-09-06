// Sample alumni data
const alumniData = [
    { name: "Anay Singh", year: 2015, degree: "Btech Computer Science", field: "Software Engineering" },
    { name: "Vishal Chauhan", year: 2018, degree: "Btech Computer Science", field: "Freelance web developer" },
    { name: "Sandhya Yadav", year: 2020, degree: "Btech Computer Science", field: "Data Analysis" },
    { name: "Tushar Mukherjee", year: 2017, degree: "Btech Computer Science", field: "Devops " },
    { name: "Vishal Kumar", year: 2019, degree: "BA Economics", field: "Junior Android Devloper" },
];

// Function to load the alumni data
function loadAlumni(data) {
    const alumniList = document.getElementById('alumniList');
    alumniList.innerHTML = '';  // Clear current list

    data.forEach(alumni => {
        const alumniElement = document.createElement('div');
        alumniElement.classList.add('alumni');
        alumniElement.innerHTML = `
            <p><strong>Name:</strong> ${alumni.name}</p>
            <p><strong>Year:</strong> ${alumni.year}</p>
            <p><strong>Degree:</strong> ${alumni.degree}</p>
            <p><strong>Field:</strong> ${alumni.field}</p>
        `;
        alumniList.appendChild(alumniElement);
    });
}

// Function to filter the alumni data
function filterAlumni() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    const filteredData = alumniData.filter(alumni => {
        return (
            alumni.name.toLowerCase().includes(searchInput) ||
            alumni.year.toString().includes(searchInput) ||
            alumni.degree.toLowerCase().includes(searchInput) ||
            alumni.field.toLowerCase().includes(searchInput)
        );
    });
    loadAlumni(filteredData);
}

// Event listener for the filter button
document.getElementById('filterBtn').addEventListener('click', filterAlumni);

// Load all alumni when the page loads
window.onload = function() {
    loadAlumni(alumniData);
};
