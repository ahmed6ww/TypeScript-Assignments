"use strict";
//31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let users = [`Ahmed`, `Shayan`, `Ammar`];
function check() {
    if (users.length != 0) {
        console.log(`The list is not empty`);
    }
    else {
        console.log(`The list is empty`);
    }
}
check();
users.splice(0, 3);
check();
//32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let current_users = [`Ahmed`, `Ammar`, `Daniel`, `Shayan`, `Martin`];
let new_users = [`Daniel`, `Martin`, `Ali`, `Moiz`, `Robert`];
for (let i in new_users) {
    let found = false;
    for (let j in current_users) {
        if (new_users[i] === current_users[j]) {
            console.log(`${new_users[i]} is not available`);
            found = true;
        }
    }
    if (!found) {
        console.log(`${new_users[i]} is available`);
    }
}
//33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number = 1; number <= numbers.length; number++) {
    let suffix = `th`;
    if (number == 1) {
        suffix = `st`;
    }
    else if (number == 2) {
        suffix = `nd`;
    }
    else if (number == 3) {
        suffix = `rd`;
    }
    console.log(`${number}${suffix}`);
}
//34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let fav_pizzas = [`Margherita Pizza`, `Pepperoni Pizza`, `BBQ Chicken Pizza`];
for (let pizza in fav_pizzas) {
    console.log(fav_pizzas[pizza]);
}
for (let pizza in fav_pizzas) {
    console.log(`I like ${fav_pizzas[pizza]}`);
}
console.log(`I love pizza!`);
//35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = [`Lion`, `Tiger`, `Cheetah`];
for (let animal in animals) {
    console.log(animals[animal]);
}
console.log(`The ${animals[0]} is a large, social cat with a distinctive mane.
The ${animals[1]} is the largest cat species with striking orange fur and black stripes.
The ${animals[2]} is the fastest land animal, capable of incredible speeds in short bursts.`);
console.log(`Do you know`);
console.log(`Lions, tigers, and cheetahs are all large, predatory cats belonging to the Felidae family.`);
//36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    return console.log(`The size of the shirt is ${size} and "${text}" will be printed on the shirt.`);
}
make_shirt(`small`, `Saitama is great!`);
//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirtM(size = `Large`, text = `I love TypeScript`) {
    return console.log(`The size of the shirt is ${size} and "${text}" will be printed on the shirt.`);
}
make_shirtM();
make_shirtM('medium');
make_shirtM(`small`, `"Lorem Ipsum"`);
//38.Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(name, country = `Pakistan`) {
    return console.log(`${name} is in ${country}.`);
}
describe_city('Islamabad');
describe_city('Rawalpindi');
describe_city('New York City', `United State`);
//39.City Names: Write a function called city_country() that takes in the name of a city and its country.
function city_country(name, country) {
    return console.log(`"${name}, ${country}"`);
}
city_country(`Islamabad`, `Pakistan`);
city_country(`Frankfurt`, `Germany`);
city_country(`Paris`, `France`);
//40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, albumTitle, tracks = `Not mentioned`) {
    let info = {
        artist,
        albumTitle,
        tracks,
    };
    console.log(`--------------------------`);
    return console.log(info);
}
make_album(`KSHMR`, `Harmonica Andromeda`);
make_album(`Avicii`, `True`);
make_album(`Martin Garrix`, `Sentio`, 11);
