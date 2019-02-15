const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92

    }
}

const {name: firstName = 'Anonymous', age} = person
console.log(firstName, age);

const { city, temp: temperature } = person.location

if (city && temperature) {
    console.log((`It's a ${temperature} in ${city}`));
    
}

const book = {
    title: 'ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }

}

const { name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName);


const adress = ['1299 S Junper Street', 'Philadeplhia', 'Pennsylvania', '19147']

const [, yourCity, yourState = "New York"] = adress

console.log(yourCity, yourState);

const item = ['Coffee', '2', '3', '4']
const [itemName, , mPrice] = item

console.log(itemName + ' cost ' + mPrice);


