// Function to add a new card to the event panel
function addEventCard(event) {
    // Create the card element
    const card = document.createElement('div');
    card.className = 'card event-element';
    
    // Create the image element
    const img = document.createElement('img');
    img.src = event.imageUrl; // Set the image source
    img.className = 'card-img-top';
    img.alt = event.title;
    card.appendChild(img);
    
    // Create the card body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    // Create the card title
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = event.title;
    cardBody.appendChild(cardTitle);
    
    // Create the card text
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = event.description;
    cardBody.appendChild(cardText);
    
    // Create the button
    const cardButton = document.createElement('a');
    cardButton.className = 'btn btn-primary';
    cardButton.href = event.link;
    cardButton.textContent = 'Go to Dashboard';
    cardBody.appendChild(cardButton);
    
    // Append the card body to the card
    card.appendChild(cardBody);
    
    // Append the card to the event panel
    document.querySelector('.event-panel').appendChild(card);
}

// Example event data (this would come from your backend)
const exampleEvent = {
    imageUrl: './images/event6.jpeg',
    title: 'Event 6',
    description: 'This is a description for Event 6.',
    link: '#'
};

// Add the new event card when needed
addEventCard(exampleEvent);

// Example of adding another event card with different data
const anotherEvent = {
    imageUrl: './images/event7.jpeg',
    title: 'Event 7',
    description: 'This is a description for Event 7.',
    link: '#'
};

// Add the second event card
addEventCard(anotherEvent);