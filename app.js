var name = 'Matt';
const states = 50;
let add = 5 + 4;
//Test wheather the index of 0 for the name variable is 'L'
if (name.indexOf('L') == 0) {
    //if it returns true this line
    alert('Back of the line.');
} else {
    alert('Next');
}

function sayHello() {
    alert('Hello World');
}
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert(`Sorry {{{toMarkdown}}}${name}{{{toMarkdown}}}, you aren't old enough to view this page!`)
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let vegetables = ['brussel sprouts', 'cucumber', 'carrots', 'squash']

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

let nameAge = [
    {
        name: 'Matt',
        age: 31
    },
    {
        name: 'Mike',
        age: 32
    },
    {
        name: 'Aaron',
        age: 21
    },
    {
        name: 'Phil',
        age: 18
    },
    {
        name: 'Danelle',
        age: 32
    }
];

for (let i = 0; i < nameAge.length; i++) {
    console.log(checkAge(nameAge[i].name, nameAge[i].age));
}

function getLength(str){
    return str.length;
}

var wordLength = getLength('Hello World.');
console.log(wordLength);

if(wordLength % 2 === 0){
    console.log('The world is nice and even');
}else {
    console.log('The world is an odd place.')
}


