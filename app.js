const fs = require('fs');

const genders = ['male', 'female']
const firstNameMale = ['John', 'Harry', 'Steve', 'Adam', 'Noel', 'William', 'Nicolas', 'Tom']
const firstNameFemale = ['Anna', 'Olivia', 'Izabella', 'Margaret', 'Elizabeth', 'Dona', 'Nicole', 'Helen']
const lastNames = ['Smith', 'Rogan', 'Potter', 'King', 'Piercy']

const randChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const people = []

for (let i = 0; i <= 20 ; i++) {
    const person = {}
    
    person.gender = randChoice(genders);
        if(person.gender === 'male') {
            person.name = randChoice(firstNameMale);
        }
        if(person.gender === 'female') { 
            person.name = randChoice(firstNameFemale);
        }
        person.lastName = randChoice(lastNames);
        person.age = Math.floor(Math.random() * (78 - 18) + 18);
        person.email = person.name.toLowerCase() + '.' + person.lastName.toLowerCase() + '@gmail.com';

        people.push(person)
}

const data = JSON.stringify(people)

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file is ready. Please check people.json');
});

