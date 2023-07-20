//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


const student = {
    Name: `Ahmed`,
    rollNo: 533527,
    group: `ICs`,
    college: `FG Sir Syed College`
}
console.log(student);


//22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. 


const array:string[]=[`Ahmed`,`shayan`,`Ammar`];
console.log(array[7]);


//23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.


let city=`Islamabad`
console.log(`Is city =='Islamabad'? I predict true`)
console.log(city==`Islamabad`);
 
let name1=`David`
console.log(`Is name =='Steve'? I predict false`)
console.log(name1==`Steve`);

let color=`voilet`
console.log(`Is color =='violet'? I predict false`)
console.log(color==`voilet`);

let animal=`Tiger`
console.log(`Is animal =='Cheetah'? I predict true`)
console.log(animal==`Cheetah`);

let fruit=`Mango`
console.log(`Is fruit =='Mango'? I predict true`)
console.log(fruit==`Mango`);

let vegetable=`potato`
console.log(`Is vegetable =='onion'? I predict false`)
console.log(vegetable==`onion`);

let car=`Audi`
console.log(`Is car =='Audi'? I predict true`)
console.log(car==`Audi`);

let actor=`Leonadro DiCaprio`
console.log(`Is actor =='Tom Cruise'? I predict false`)
console.log(actor==`Tom Cruise`);

let singer=`Ed Sheeran`
console.log(`Is singer =='Ed Sheeran'? I predict true`)
console.log(singer==`Ed Sheeran`);

let movie=`The Revenant`
console.log(`Is movie =='The Matrix'? I predict True`)
console.log(movie==`The Matrix`);



//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.


let movie2=`The Matrix`
console.log(movie2==`The Matrix`);

let movie3=`The Meg`
console.log(movie3==`Titanic`);

console.log(`----------`);

let planet=`Mars`
console.log(planet.toLowerCase()==`mars`);

let planet2=`jupitEr`
console.log(planet2.toLowerCase()==`Jupiter`);

console.log(`----------`);

let num1=2
let num2=2
console.log(num1==num2);

let num3=2
let num4=3
console.log(num3!=num4);

let num5=5
let num6=2
console.log(num6<num5);

let num7=5
let num8=2
console.log(num7>num8);

let num9=5
let num10=5
console.log(num9<=num10);

let num11=6
let num12=5
console.log(num11>=num12);
console.log(`----------`);

let animals=[`Jaguar`,`Tiger`,`Lion`]
console.log(animals.includes(`Jaguar`) && animals.includes(`Tiger`))
console.log(animals.includes(`Lion`) || animals.includes(`Tiger`))

console.log(`----------`);

function presence(pres:number){let numbers:number[]=[1,2,3,4,5,6,7,8,9]
let found=false;
for(let number in numbers){
    if(numbers[number]==pres){
        console.log(`${numbers[number]} is present the an array`)
        found=true;
        break;
    }
}
if(!found){
        console.log(`Number is not present in the array`);
}
}
presence(11);
presence(9)


//25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.


let alien_color= `green`;
if(alien_color=="green"){
    console.log(`You have earned 5 points`)
}
let alien_color2=`yellow`;
if(alien_color2=="voilet"){
    console.log(`You have earned 5 points`)
}
let alien_color3=`red`;
if(alien_color3==`red`){
    console.log(`You have earned 7 pionts`)
}
else{
    console.log(`You have earned 5 points`)
}

let alien_color4=`red`;
if(alien_color3==`black`){
    console.log(`You have earned 7 pionts`)
}
else{
    console.log(`You have earned 5 points`)
}

//26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.


if (alien_color==`green`){
    console.log(`You have just earned 5 points for shooting the alien`)
}
else{
    console.log(`You have just earned 10 points`)
}
let alien_color5=`yellow`;
if (alien_color5==`blue`){
    console.log(`You have just earned 5 points for shooting the alien`)
}
else{
    console.log(`You have just earned 10 points`)
}

//27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.


let alien_color6= `green`;
if(alien_color6=="green"){
    console.log(`You have earned 5 points`)}
else if(alien_color6==`yellow`){
    console.log(`You have earned 10 points`)}
else if(alien_color6==`red`){
    console.log(`You have earned 15 points`)
}

let alien_color7= `yellow`;
if(alien_color7=="green"){
    console.log(`You have earned 5 points`)}
else if(alien_color7==`yellow`){
    console.log(`You have earned 10 points`)}
else if(alien_color7==`red`){
    console.log(`You have earned 15 points`)
}

let alien_color8= `red`;
if(alien_color8=="green"){
    console.log(`You have earned 5 points`)}
else if(alien_color8==`yellow`){
    console.log(`You have earned 10 points`)}
else if(alien_color8==`red`){
    console.log(`You have earned 15 points`)
}


//28.Stages of Life: Write an if-else chain that determines a person’s stage of life.


let person_age=19;

if(person_age==2 ){
    console.log(`Person is a baby`)
}
else if(person_age==2 || person_age<4){
    console.log(`Person is a toddler`)
}
else if(person_age==4 || person_age<13){
    console.log(`Person is a kid`)
}
else if(person_age==13 || person_age<20){
    console.log(`Person is a teenager`)
}
else if(person_age==20 || person_age<65){
    console.log(`Person is an adult`)
}
else if(person_age>=65){
    console.log(`Person is an elder`)
}


//29.Favorite Fruit: Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.


let favourite_fruits:string[]=[`Bananas`,`Litchis`,`Mangoes`]
for(let fruit in favourite_fruits){
    if(favourite_fruits[fruit]==`Bananas`){
        console.log(`I really like ${favourite_fruits[fruit]}!`)
    }
    else if(favourite_fruits[fruit]==`Apple`){
        console.log(`I really like ${favourite_fruits[fruit]}!`)
    }
    else if(favourite_fruits[fruit]==`Litchis`){
        console.log(`I really like ${favourite_fruits[fruit]}!`)
    }
    else if(favourite_fruits[fruit]==`Mangoes`){
        console.log(`I really like ${favourite_fruits[fruit]}!`)
    }
    else if(favourite_fruits[fruit]==`Grapes`){
        console.log(`I really like ${favourite_fruits[fruit]}!`)
    }
    else if(favourite_fruits[fruit]==`gava`){
        console.log(`I really like ${favourite_fruits[fruit]}!`)
    }
}


//30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website.


let usernames:string[]=[`Admin`,`Ahmed`,`Ammar`,`Shayan`,`Steve Jobs`];
for(let user in usernames){
    if(usernames[user]==`Admin`)
    console.log(`Hello ${usernames[user]}, would you like to see a status report?`)
    else{
        console.log(`Hello ${usernames[user]}, thank you for logging in again.`)
    }
}

