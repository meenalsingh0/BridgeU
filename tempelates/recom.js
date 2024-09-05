
document.getElementById('getRecommendations').addEventListener('click', function() {


    const personName = document.getElementById('personName').value;
    
    if (!personName) {
        alert('Please enter a name');  
        return;  
    }

    console.log(`Fetching recommendations for: ${personName}`);  

    fetch(`http://localhost:5000/recom?person_name=${encodeURIComponent(personName)}`, {
        mode: 'cors' 
    })
        .then(response => {
            console.log(response);  
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            console.log('Data received:', data);  

            const resultsDiv = document.getElementById('results');  
            resultsDiv.innerHTML = '';  

            
            if (data.error) {
                resultsDiv.innerHTML = `<p>${data.error}</p>`;  
            } else {
                
                for (const [person, score] of Object.entries(data)) {
                    
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item');  
                    resultItem.textContent = `${person} - Similarity Score: ${score.toFixed(2)}`;
                    resultsDiv.appendChild(resultItem);
                }
            }
        })
        .catch(error => {
            console.error('Error fetching recommendations:', error);
            alert('An error occurred while fetching recommendations. Please try again.');
        });
});
