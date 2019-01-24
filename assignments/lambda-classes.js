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
        // Stretch Task #1: Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
        this.grade = studentProps.grade;
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
    favSubjects: ["Hoisting", "Constructor Functions", "Scope"],
    // New prop for Stretch Task #1
    grade: 98
})

const james = new Student({
    name: "LeBron James",
    age: 31,
    location: "Miami, FL",
    gender: "male",
    previousBackground: "Venture Capitalist",
    className: "FS12",
    favSubjects: ["APIs", "the 'this' keyword", "LESS"],
    // New prop for Stretch Task #1
    grade: 95
})

const harden = new Student({
    name: "James Harden",
    age: 30,
    location: "Houston, TX",
    gender: "male",
    previousBackground: "Assistant Ranch Hand",
    className: "iOS3",
    favSubjects: ["jQuery", "Flex-box", "SASS"],
    // New prop for Stretch Task #1
    grade: 96
})

console.log(curry.previousBackground);
console.log(james.className);
console.log(harden.favSubjects);
james.speak();
curry.listsSubjects();
harden.PRAssignment("Responsive Web Design");
james.sprintChallenge("React");
// Testing Stretch Task #1
console.log(harden.grade);



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

//========== NEW OBJECTS FOR SUB-CLASS: ProjectManager ==========
const carter = new ProjectManager({
    name: "Vince Carter",
    age: 35,
    location: "Toronto, Canada",
    gender: "male",
    specialty: "Back-end",
    favLanguage: "Python",
    catchPhrase: "I bet you I can dunk on you!",
    gradClassName: "CS1",
    favInstructor: "Magic Johnson"
})

const mcgrady = new ProjectManager({
    name: "Tracy McGrady",
    age: 32,
    location: "Dallas, TX",
    gender: "male",
    specialty: "Front-end",
    favLanguage: "CSS",
    catchPhrase: "Have you ever seen anyone score 13 points in less than 1 minute?",
    gradClassName: "CS3",
    favInstructor: "Michael Jordan"
})

const bryant = new ProjectManager({
    name: "Kobe Bryant",
    age: 34,
    location: "Los Angeles, CA",
    gender: "male",
    specialty: "Full Stack",
    favLanguage: "JavaScript",
    catchPhrase: "The funny thing is I'm going to tell you which way I'm going to go and you STILL can't stop me!",
    gradClassName: "CS5",
    favInstructor: "Michael Jordan"
})

console.log(carter.gradClassName);
console.log(mcgrady.favInstructor);
console.log(bryant.catchPhrase);
carter.speak();
bryant.demo("template literals");
mcgrady.grade(james, "Variables");
bryant.standUp("#web17");
carter.debugsCode(harden,"class syntax");

