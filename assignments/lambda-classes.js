// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

const brody = new Person({
    name: "Brody Swaggerson",
    age: 31,
    location: "Pigeon, MI",
    gender: "M"
})

const broseph = new Person({
    name: "Broseph McBuckets",
    age: 25,
    location: "Bad Axe, MI",
    gender: "M"
})

const broham = new Person({
    name: "Abroham Linkin",
    age: 27,
    location: "Cass City, MI",
    gender: "M"
})

console.log(brody.name);
console.log(broseph.age);
console.log(broham.location);

