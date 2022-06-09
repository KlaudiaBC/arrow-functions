/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 27, 26]
// let John = ages[0];
// let Mary = ages[1];
// let Joe = ages[2];
// below code works the same:
let [John, Mary, Joe] = ages;
console.log(John, Mary, Joe)


// Destructuring objects
let jobs = {
    mike: "developer",
    jill: "designer",
    alice: "accountant",
}
let { mike, jill, alice } = jobs;
console.log(mike, jill, alice)


// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "dutch"];
let [johnNative, johnSecondary] = languages
console.log(johnNative, johnSecondary)

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLang: "english",
    secondLang:"french",
    thirdLang: "spanish",
    fourthLang: "dutch",
}

let { firstLang, thirdLang } = languages2
console.log(firstLang, thirdLang)

// Using rest parameter syntax
let fruits = ["apple",  "orange", "banana", "peach", "cherry"];
let [favoirute, secondFav, ...others] = fruits;
console.log(favoirute);
console.log(secondFav);
console.log(others);
