const faker = require('faker');

faker.locale = 'en_US';
const clients = [];

for (let index = 0; index < 3; index++) {

    const id = faker.random.uuid();
    const name = faker.name.findName();
    const email = faker.internet.email(name);
    const phoneNumber = faker.phone.phoneNumber();
    const password = faker.internet.password();

    

    client = {
        id,
        name, 
        email,
        phoneNumber,
        password
    }
    
    clients.push(client);
    
}

console.log(clients);