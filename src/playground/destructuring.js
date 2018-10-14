

//object destructuring
// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Austin',
//         temp: 93
//     }
// }

// const {name = 'Anonymous', age} = person; 
// console.log(`${name} is ${age}`)


// const {city, temp: temperature} = person.location
// console.log(`It's ${temperature} here in ${city}`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Lorna'} = book.publisher

console.log(publisherName)


//Array Destructuring

const address = ['1299 S Juniper Street', 'Austin', 'Texas', '78751']
const [, city, state  = 'New York'] = address;
console.log(`You are in ${city} ${state}`)


const item = ['Coffee (hot)', '$2.00', '$3.00', '$4.00']
const [coffee, , mediumCost] = item
console.log(`A Medium ${coffee} costs ${mediumCost}`)