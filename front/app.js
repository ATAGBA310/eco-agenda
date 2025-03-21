// front/app.js (côté client)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('event-form');
    const eventList = document.getElementById('event-list');

    // Charge les événements depuis l'API
    fetch('/api/events')
        .then(response => response.json())
        .then(events => {
            events.forEach(event => {
                addEventToDOM(event.title, event.date, event.location);
            });
        });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const location = document.getElementById('location').value;

        if (title && date && location) {
            // Envoie l'événement au serveur
            fetch('/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, date, location })
            })
            .then(response => response.json())
            .then(newEvent => {
                addEventToDOM(newEvent.title, newEvent.date, newEvent.location);
                form.reset();
            });
        }
    });

    function addEventToDOM(title, date, location) {
        const li = document.createElement('li');
        li.textContent = `${title} - ${date} - ${location}`;
        eventList.appendChild(li);
    }
});

// Appel API pour récupérer les événements au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');

    // Récupérer les événements via l'API
    fetch('http://localhost:3000/api/events')
        .then(response => response.json())
        .then(events => {
            events.forEach(event => {
                // Affichage des événements dans la liste
                const li = document.createElement('li');
                li.textContent = `${event.title} - ${event.date} - ${event.location}`;
                eventList.appendChild(li);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des événements:', error));
});

