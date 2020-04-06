'use strict'

const myArray = [1,2,3,4,5];

// map();
console.log(myArray.map(el => Math.pow(el, 2)));
console.log(myArray.map(el => el * 2));

// filter();
console.log(myArray.filter(el => el % 2));
console.log(myArray.filter(el => el <= 5));

// find returns first true case
console.log(myArray.find(el => el < 3));

// includes returns boolean
console.log(myArray.includes(3));
// 2nd argument searches from index ...
console.log(myArray.includes(3, 4));

// reduce returns a single value;
console.log(myArray.reduce((accumulator, currentElement) => 
    accumulator += currentElement, 0)
)


// fun fun functions exercises to reinforce knowledge
let animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro',       species: 'dog' },
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Harold',     species: 'fish' },
    { name: 'Ursula',     species: 'cat' },
    { name: 'Jimmy',      species: 'fish' }
  ]

// using for loop
let nameAndSpecies = [];
for (let i=0; i<animals.length; i++){
    nameAndSpecies.push(`${animals[i].name} is a ${animals[i].species}`)
}
console.log(nameAndSpecies)
// using map
console.log(animals.map(animals => `${animals.name} is a ${animals.species}`))

// using for loop
let dogs = [];
for (let i=0; i<animals.length; i++){
    if (animals[i].species == 'dog')
        dogs.push(animals[i].name)
}
console.log(dogs)
// using filter
console.log(animals.filter(animal => animal.species == 'dog'))

let orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325},
];
// using for loop
let totalAmount = 0;
for (let i=0; i<orders.length; i++){
    totalAmount += orders[i].amount;
}
console.log(totalAmount);
// using reduce
let totAmount = orders.reduce((sum, order) => sum + order.amount, 0)
console.log(totAmount)

let fs = require('fs')

var output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
    }, {})

console.log('output', JSON.stringify(output, null, 2))

// closures
function sendRequest(){
    let requestID = '123'
    $.ajax({
        url: '/myUrl',
        success: function(response){
            alert('Request ' + requestID + ' returned')
        }
    });
}

// recursion -> When a function calls itself, until it doesn't.
let countDownFrom = (num) => {
    if(num <= 0) return;
    console.log(num);
    countDownFrom(num -1);
}
countDownFrom(10)

let categories = [
	{ id: 'animals', parent: null },
	{ id: 'mammals', parent: 'animals' },
	{ id: 'cats', parent: 'mammals' },
	{ id: 'dogs', parent: 'mammals' },
	{ id: 'chihuahua', parent: 'dogs' },
	{ id: 'labrador', parent: 'dogs' },
	{ id: 'persian', parent: 'cats' },
	{ id: 'siamese', parent: 'cats' }
]

let makeTree = (categories, parent ) => {
	let node = {}
	categories
		.filter(c => c.parent === parent)
		.forEach(c => node[c.id] = makeTree(categories, c.id))
	return node
}

console.log(
	JSON.stringify(
		makeTree(categories, null), 
		null,
		2
	)
)