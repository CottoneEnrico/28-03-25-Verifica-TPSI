const fs = require('fs');
const axios = require('axios');

async function fetchUsers() {
    try {
        const response = await axios.get('https://randomuser.me/api/?results=5&inc=gender,name,nat,id,city,picture,email');
        const users = response.data.results.map(user => ({
            gender: user.gender,
            name: user.name,
            nat: user.nat,
            id: user.id,
            city: user.city,
            picture: user.picture,
            email: user.email
        }));
        
        fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
        console.log("Utenti salvati nel file users.json");
    } catch (error) {
        console.error("Errore nel fetch degli utenti:", error);
    }
}

fetchUsers();