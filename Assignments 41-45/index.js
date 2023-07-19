"use strict";
//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = [`David Copperfield`, `Derren Brown`, `Shin Lim`];
function show_magicians(array) {
    console.log(array);
}
show_magicians(magicians);
//42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians2 = [`David Copperfield`, `Derren Brown`, `Shin Lim`];
function make_great() {
    for (let name in magicians2)
        magicians2[name] = `The great ${magicians2[name]}`;
}
make_great();
show_magicians(magicians2);
//43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let new_array = [];
new_array.push(magicians2);
show_magicians(new_array);
//44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(items) {
    let array = [];
    items;
    array.push(items);
    console.log(`Item '${array}'`);
}
sandwich(`extra mayo`);
sandwich(`spicy`);
sandwich(`chicken`);
//45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car_info(manufacturer, model) {
    let car = {
        manufacturer,
        model,
    };
    return console.log(car);
}
car_info(`Audi`, 2456799);
