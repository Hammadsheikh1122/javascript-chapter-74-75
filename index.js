let players = ["Babar Azam", "Shaheen Afridi", "Rizwan"];

console.log(players);

let team = [
    {
        name: "Babar Azam",
        role: "Batsman"
    },
    {
        name: "Shaheen Afridi",
        role: "Bowler"
    },
    {
        name: "Rizwan",
        role: "Wicket Keeper"
    }
];

team.push({
    name: "Fakhar Zaman",
    role: "Batsman"
});

console.log(team);
let student = {
    name: "Hammad",
    age: 17,
    course: "Modern Web Development"
};

console.log(`My name is ${student.name}`);
console.log(`My age is ${student.age}`);
console.log(`My course is ${student.course}`);

let subjects = ["HTML", "CSS", "JavaScript"];

console.log(`My first subject is ${subjects[0]}`);
console.log(`My second subject is ${subjects[1]}`);
console.log(`My third subject is ${subjects[2]}`);
function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.introduce = function() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
};

let student1 = new Student("Hammad", 17);
let student2 = new Student("Ali", 18);

student1.introduce();
student2.introduce();
