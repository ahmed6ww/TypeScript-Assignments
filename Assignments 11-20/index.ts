//11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let friends: string[] = [`Ammar`, `Shayan`];
console.log(friends[0]);
console.log(friends[1]);

//12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

console.log(friends[0] + ' wie gehts?');
console.log(friends[1] + ' woher kommst du?');

//13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ['Audi', 'Bikes', 'Helicopter'];
console.log('I would like to own an ' + transportation[0]);
console.log('I would like to own ' + transportation[1]);
console.log('I would also like to own a ' + transportation[2]);

//14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let invitation: string[] = ['Ammar', 'Shayan', 'Sir Arshad'];
function people(): void {
    console.log('Hey ' + invitation[0] + '! You are invited to dinner.');
    console.log('Hey ' + invitation[1] + '! You are invited to dinner.');
    console.log('Hello ' + invitation[2] + '! You are invited to dinner.');
}
people();

//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

invitation.splice(2);
console.log('Unfortunately ' + invitation[2] + ' will not be able to join the dinner.');
invitation.push('Martin Garrix');
console.log(people());

//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

console.log(`I have found a bigger dinner table`);
invitation.unshift(`David`);
invitation.splice(2, 0, `Brooks`);
invitation.push(`Steve jobs`);
console.log(invitation);

//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

console.log(`I can only invite only two people`);
invitation.splice(4, 0);
for (let i: number = 0; i < 4; i++) {
    console.log(`Dear ${invitation.pop()}! Sorry I cannot invite you to dinner.`);
}
for (let guests in invitation)
    console.log(`Dear ${invitation[guests]}! You are still invited`);
invitation.splice(0, 2);
console.log(`The list${invitation} is empty now`);

//18.Seeing the World: Think of at least five places in the world you’d like to visit.

let places: string[] = [`New York City`, `Amsterdam`, `Japan`, `Gilgit`, `Silicon valley`];
for (let place of places) {
    console.log(place);
}
let orignalArray: string[] = [...places]//Copy of orignal array
places.sort();
console.log(places);
function plArrat() {                    //Function to reduce repition
    console.log(`Orignal order of the array is given below`);
    for (let place of orignalArray) {
        console.log(place);
    }
}
console.log(`The reverse alphabetical order is given below`)
places.reverse();
console.log(places);
plArrat();
console.log(`Reversed order of orignal array`);
orignalArray.reverse();
console.log(orignalArray);
console.log(`Back to orignal order`);
orignalArray.reverse();
console.log(orignalArray);
console.log(`Orignal array in alphabetical oeder`);
orignalArray.sort();
console.log(orignalArray);
console.log(`Orignal array in reversed alphabetical oeder`);
orignalArray.reverse();
console.log(orignalArray);

//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log(`Number of guests invited ${invitation}`);

//20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let languages: string[] = [`French`, `German`, `Latin`, `Spanish`, `Russian`]
languages.sort();
console.log(languages);