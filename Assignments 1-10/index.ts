//2.Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let name1='Enter your name'
console.log("Hello "+name1+", would you like to learn some Python today?")


//3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let name2 = "Ahmed";
let lowercaseName = name2.toLowerCase();
console.log(lowercaseName) //lowercase
let uppercaseName=name2.toUpperCase();
console.log(uppercaseName); //uppercasee
console.log(name2.charAt(0).toUpperCase() + name2.slice(1)); //Titlecase


//4.Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following

console.log('Nikola Tesla once said, "If your hate could be turned into electricity, it would light up the whole world."')


//5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person="Khalil Gibran";
let message=' "When you are sorrowful, look again in your heart, and you shall see that, in truth, you are weeping for that which has been your delight."';
console.log(famous_person+ ' once said,' +message);

//6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let name3='\tAhmed\t';
console.log(name3)
console.log("\n"+name3)
console.log(name3.trim())

//7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log(4+4);
console.log(12-4);
console.log(4*2);
console.log(96/12);


//9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let fav_numb=9;
let message2="My favourite number is ";
console.log(message2+fav_numb)

//10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//Name:Ahmed     Date:13-07-2023
//This program performs basic math operations
console.log(4+4);
console.log(12-4);
console.log(4*2);
console.log(96/12);

//This program prints my favourite number

let fav_numb2=9;
let message3="My favourite number is ";
console.log(message+fav_numb2);