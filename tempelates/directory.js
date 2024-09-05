const alumniData = [
    { name: "John Doe", year: "2010", major: "Computer Science" },
    { name: "Jane Smith", year: "2012", major: "Business Administration" },
    { name: "Alice Johnson", year: "2015", major: "Electrical Engineering" },
    { name: "Bob Brown", year: "2017", major: "Mechanical Engineering" },
    { name: "Charlie Davis", year: "2020", major: "Biology" }
];

// Function to filter and display alumni
function filterAlumni(searchTerm) {
    const directory = document.getElementById('directory');
    directory.innerHTML = '';  // Clear previous results
    
    const filteredAlumni = alumniData.filter(alumni => 
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.year.includes(searchTerm) ||
        alumni.major.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredAlumni.length > 0) {
        filteredAlumni.forEach(alumni => {
            const alumniElement = document.createElement('div');
            alumniElement.classList.add('alumni');
            alumniElement.innerHTML = `
                <span class="name">${alumni.name}</span>
                <div class="details">Graduation Year: ${alumni.year} | Major: ${alumni.major}</div>
            `;
            directory.appendChild(alumniElement);
        });
        directory.style.display = 'block';
    } else {
        directory.style.display = 'none';
    }
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', function(event) {
    const searchTerm = event.target.value.trim();
    if (searchTerm) {
        filterAlumni(searchTerm);
    } else {
        document.getElementById('directory').style.display = 'none';
    }
});
