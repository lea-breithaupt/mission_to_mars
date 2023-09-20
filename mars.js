alert('Hello!');
alert('Starting your Mars Adventure');
alert('Booting up...');
alert('All systems go!');
alert("Let's start");

let username = prompt("Hi there. What's your name?");

let mainName = username [0];
mainName = mainName.toUpperCase();
let restName = username.slice(1);
restName = restName.toLowerCase();
username = mainName + restName;

alert(`Hi, ${username} --- Welcome to the Mars Adventure Game.`);

alert('Yesterday, you received a call from your good friend at NASA.');
alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!!")

let excited = prompt('Are you excited? Type Y or N');
excited = excited.toUpperCase();
if (excited === 'Y') {
    alert("I know you'd say that. It's cool that you're going to Mars!");
    excited = excited.toUpperCase('y')
}
if (excited === 'N') {
    alert("Well, it's too late to back out now.");
    excited = excited.toUpperCase('n')
}

alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt('How many suitcases do you plan to bring?');
numSuitcases = Number(numSuitcases);

if(numSuitcases > 2) {
    alert("That's way too many. you'll have to pack more lightly.");
} else {
    alert("Perfect. You'll certainly fit in the spaceship!");
}

alert("You're allowed to bring one companion animal with you");
let companionType = prompt('What kind of companion animal would you like to bring?');
let companionName = prompt("What is your companion name?");

let firstLetter = companionName [0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();
companionName = firstLetter + otherLetters;

let firstType = companionType [0];
firstType = firstType.toUpperCase();
let otherType = companionType.slice(1);
otherType = otherType.toLowerCase();
companionType = firstType + otherType;

alert(`Cool, so you're bringing ${companionName} the ${companionType}`);

alert('NASA has a interior design team offering to outfit your space ship');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decorChoice = prompt('What kind of decor would you like for your spaceship?')

let decor;
if (decorChoice === 'A') {
    decor = 'modern minimalist';
} else if (decorChoice === 'B') {
    decor = 'retro/vintage';
} else if (decorChoice === 'C') {
    decor = 'victorian steampunk';
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`);

alert('5 . . .');
alert('4 . . .');
alert('3 . . .');
alert('2 . . .');
alert('1 . . .');
alert('*** LIFTOFF ***');

let timer = 5;
while (timer > 5) {
    alert(`${timer} ...`);
    timer = 0;
}
