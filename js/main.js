// Control Flow
// Switch Case

let day = new Date().getDay()

let literalDay = new Date().toString()

console.log(day)
console.log(literalDay)

switch(day) {
    case 0:
        console.log("Sleep all Sunday...")
        break;
    case 1:
        console.log("Write code it's Monday")
        break;
    case 2:
        console.log("Tacos for everyone! It's Tuesday")
        break;
    case 3:
        console.log("Keep testing code...it's Wednesday")
        break;
    case 4:
        console.log("Write a new feature, it's Thursday")
        break;
    case 5:
        console.log("Call Rebecca Black...it's Friday")
        break;
    case 6:
        console.log("Spend Saturday out in the sun")
        break;
    default:
        console.log("We don't have a case for that")
}

// Literal Day example

switch(literalDay.split(" ")[0]) {
    case "Sun":
        console.log("Sleep all Sunday...")
        break;
    case "Mon":
        console.log("Write code it's Monday")
        break;
    case "Tue":
        console.log("Tacos for everyone! It's Tuesday")
        break;
    case "Wed":
        console.log("Keep testing code...it's Wednesday")
        break;
    case "Thu":
        console.log("Write a new feature, it's Thursday")
        break;
    case "Fri":
        console.log("Call Rebecca Black...it's Friday")
        break;
    case "Sat":
        console.log("Spend Saturday out in the sun")
        break;
    default:
        console.log("We don't have a case for that")
}

// -- Creation of Objects in JS -- //

// -- Simple Object in JS -- //

let person = {
    name: "Timothy",
    age: 21,
    favColor: "Purple"
}

// Accessing info //

console.log(person["name"]) // Bracket notation
console.log(person.favColor) // Dot notation

// Complex JS object //

let person2 = {
    name: "Trini",
    age: 27,
    progLanguages: ["JavaScript", "Python", "C++", "Java"],
    favColor: "Yellow",
    team: [
        {
            baseball: "Chicago White Sox",
            football: "Chicago Bears",
            hockey: "Chicago Blackhawks",
            basketball: ["Chicago Bulls", "Chicago Sky"],
            soccer: ["Chicago Fire", "Naperville Yellowjacks"]
        },
        {
            football: ["New Orleans Saints", "San Francisco 49ers", "Green Bay Packers", "Vikings"],
            baseball: ["SF Giants", "Seattle Mariners"],
            basketball: ["Lakers", "Cavs", "Sac Kings", "Trail Blazers", "Wolves", "Harlem Globetrotters"],
            soccer: ["Columbus Crew", "Timbers", "The Red Team", "Sounders", "Manchester United", "Bruins", "Boston Bolts"],
            hockey: ["LA Kings", "Red Wings", "Seattle Kraken", "Dallas Stars", "Bruins", "Bluejackets"]
        }
    ]
}

console.log(person2.progLanguages[2])
console.log(person2.team[0].hockey)
console.log(person2.team[1].hockey[4])
console.log(person2)

// -- JS Object Prototype Methods -- Object Literal -- //
console.log(Object.keys(person2))
console.log(Object.values(person2))

// Don't do this when looping
for (let i = 0; i < person2.length; i++){
    console.log(person2[i])
}

// Correct way to loop through objects:
for (let i = 0; i < Object.keys(person2).length; i++) {
    if (Array.isArray(Object.values(person2)[i])) {
        Object.values(person2)[i].forEach(element => console.log(element))
    } else{
        console.log(Object.values(person2)[i])
    }
}

// Create an object prototype with ES5 method syntax
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    // A method belonging to the prototype
    this.printInfo = function(color, wheels=4){
        console.log(`This is a ${this.year}, ${this.make}, ${this.model}
        It has ${wheels} wheels and the color is ${color}`)
        return "Returned Value"
    }
}

// Create instance of prototype
let my_car = new Car("Volkswagen", "Jetta", "2013")

// Call prototype method
my_car.printInfo("Black Black")

// JS Classes -- ES6 //
class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }
    printInfo() {
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`
    }
}

let bobby = new Human("Bobby", 33, "Female")
console.log(bobby.printInfo())

// Inheritance using JS classes

class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking
    }
    isBabyWalking() {
        return this.walking ? `${this.name} is walking` : `${this.name} isn't walking yet`
    }
}

// Create an instance of Baby class //
let laya = new Baby("Laya", 1, "Female", true)
console.log(laya.printInfo())
console.log(laya.isBabyWalking())

// Async JavaScript Section //

// JavaScript Callbacks //

function first() {
    console.log(1)
}

function second() {
    console.log(2)
}

// first()
// second()

// But what if we add a delay to the first function?
function first_delay() {
// Simulate delay
setTimeout( () => (console.log("delayed for 5 seconds")), 5000)
}
function second_delay() {
    console.log("Second function was not delayed.")
}

// first_delay()
// second_delay()

// Callback function syntax //
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`)
    callback()
}

// doHomework("JavaScript", ()=> console.log("Done with Homework."))

// We solve this with Promises

const isEvenNumber = num => {
    return new Promise( (yessir, nosir ) => {
        num % 2 == 0 ? yessir(true) : nosir(num)
    })
}

// Using JS Promise
isEvenNumber(98)

// Happy resolver path
.then( (result) => {
    console.log(`${result} this is an even number`)
})

.catch ( (error) => {
    console.log`${error} this is an odd number.`
})

// Another promise example
function increaseSalary(base, increase) {
    const newSalary = base + increase
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}

// Add salary slowly
function slowSalary(n1, n2) {
    return new Promise (resolve => {
        setTimeout( () => resolve(n1+n2, 3000))
    })
}

function increaseSlowSalary(base, increase) {
    const newSalary = slowSalary(base, increase);
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}

async function increaseSlowSalary(base, increase) {
    const newSalary = await slowSalary(base, increase);
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}