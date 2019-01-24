// CODE here for your Lambda Classes

//========== BASE CLASS: Person ==========
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

//========== NEW OBJECTS FOR BASE CLASS: Person ==========
const brody = new Person({
    name: "Brody Swaggerson",
    age: 31,
    location: "Pigeon, MI",
    gender: "male"
})

const broseph = new Person({
    name: "Broseph McBuckets",
    age: 25,
    location: "Bad Axe, MI",
    gender: "male"
})

const broham = new Person({
    name: "Abroham Linkin",
    age: 27,
    location: "Cass City, MI",
    gender: "male"
})

console.log(brody.name);
console.log(broseph.age);
console.log(broham.location);
brody.speak();



//==========  SUB-CLASS: Student ==========
class Student extends Person {
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }
    listsSubjects(favSubjects) {
        console.log(`${this.name}'s favorite subjects are: `);
        console.log(`${this.favSubjects[0]}`);
        console.log(`${this.favSubjects[1]}`);
        console.log(`${this.favSubjects[2]}`);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun the sprint challenge on ${subject}`);
    }
}

//========== NEW OBJECTS FOR SUB-CLASS: Student ==========
const curry = new Student({
    name: "Steph Curry",
    age: 29,
    location: "Oakland, CA",
    gender: "male",
    previousBackground: "Sushi Chef",
    className: "FS14",
    favSubjects: ["Hoisting", "Constructor Functions", "Scope"]
})

const james = new Student({
    name: "LeBron James",
    age: 31,
    location: "Miami, FL",
    gender: "male",
    previousBackground: "Venture Capitalist",
    className: "FS12",
    favSubjects: ["APIs", "the 'this' keyword", "LESS"]
})

const harden = new Student({
    name: "James Harden",
    age: 30,
    location: "Houston, TX",
    gender: "male",
    previousBackground: "Assistant Ranch Hand",
    className: "iOS3",
    favSubjects: ["jQuery", "Flex-box", "SASS"]
})

console.log(curry.previousBackground);
console.log(james.className);
console.log(harden.favSubjects);
james.speak();
curry.listsSubjects();
harden.PRAssignment("Responsive Web Design");
james.sprintChallenge("React");



//==========  SUB-CLASS: Instructor ==========
class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

//========== NEW OBJECTS FOR SUB-CLASS: Instructor ==========
const jordan = new Instructor({
    name: "Michael Jordan",
    age: 23,
    location: "Chicago, IL",
    gender: "male",
    specialty: "Front-end",
    favLanguage: "JavaScript",
    catchPhrase: "Watch me dunk from the free-throw line!"
})

const payton = new Instructor({
    name: "Gary Payton",
    age: 25,
    location: "Seattle, WA",
    gender: "male",
    specialty: "Back-end",
    favLanguage: "CSS",
    catchPhrase: "I bet you that I can shut you down on defense!"
})

const johnson = new Instructor({
    name: "Magic Johnson",
    age: 27,
    location: "East Lansing, MI",
    gender: "male",
    specialty: "Front-end",
    favLanguage: "HTML",
    catchPhrase: "I'm looking over here, but I'm passing over there!"
})

console.log(jordan.specialty);
console.log(payton.favLanguage);
console.log(johnson.catchPhrase);
payton.speak();
jordan.demo("closures");
johnson.grade(curry, "API calls");



//==========  SUB-CLASS: ProjectManager ==========
class ProjectManager extends Instructor {
    constructor(pmProps) {
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}





