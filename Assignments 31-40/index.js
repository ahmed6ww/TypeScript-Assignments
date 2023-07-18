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
let current_users = [`Ahmed`, `Ammar`, `Shayan`, `Daniel`, `Martin`];
let new_users = [`Daniel`, `Martin`, `Ali`, `Moiz`, `Robert`];
let current_user1 = A;
if (new_users.includes(current_list)) {
    console.log(`The user name is available`);
}
else {
    console.log(`You will need to enter a new username.`);
}
