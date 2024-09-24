
// Global variable to store alumni data
let alumniData = [];

// Function to load the CSV file from the server
function loadCSV() {
    fetch('alumni_data.csv')
        .then(response => response.text())
        .then(data => {
            parseCSV(data);
        })
        .catch(error => console.error('Error fetching the CSV file:', error));
}

// Function to parse CSV and load alumni data
function parseCSV(data) {
    const rows = data.split('\n');

    // Filter out any empty rows or rows that don't have enough columns
    alumniData = rows.map(row => row.split(',')).filter(columns => columns.length === 4);

    // Map filtered rows to alumni objects, converting all to strings
    alumniData = alumniData.map(columns => {
        const [name, year, degree, field] = columns;
        return {
            name: String(name).trim(),
            year: String(year).trim(),  // Convert year to string
            degree: String(degree).trim(),
            field: String(field).trim()
        };
    });

    loadAlumni(alumniData); // Load the parsed data initially
}

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
            (alumni.name?.toLowerCase() || '').includes(searchInput) ||
            (alumni.year?.toString() || '').includes(searchInput) ||
            (alumni.degree?.toLowerCase() || '').includes(searchInput) ||
            (alumni.field?.toLowerCase() || '').includes(searchInput)
        );
    });
    loadAlumni(filteredData);
}

// Event listener for the filter button
document.getElementById('filterBtn').addEventListener('click', filterAlumni);

// Load CSV when the page loads
window.onload = function() {
    loadCSV();
};

