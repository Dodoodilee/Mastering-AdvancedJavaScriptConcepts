// Chapter 1 LearnJavascipt ! Sum & Multiplications

function sum(x, y) {
  return x + y;
}

console.log("sum:", sum(1, 9));

function multiply(a, b) {
  return a * b;
}

console.log("multiply:", multiply(2, 4));

// Chapter 2 Strings And Properties And Methods !

function getLength(catnames) {
  return catnames.length;
}

console.log("getLength:", getLength("nova"));
console.log("getLength:", getLength("momcat")); // This Is A .length property which we use to get the number of characters .

function androidDetails(version) {
  return version.toUpperCase();
}

console.log("androidDetails:", androidDetails("kitkat")); // this is an uppcase method and the same applies with lowercase .

// Substrings - .substring method - helps us get specific characters from a string . while skipping .

function skipFirstCharacter(text) {
  return text.substring(1);
}

console.log("skipFirstCharacter:", skipFirstCharacter("EngineeringWare")); // remmember not to use the substr method but .substring method !

// Another EXAMPLE

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase(); // here we are using the substring method to select the specific characters .
}

console.log("capitalize:", capitalize("andromede"));
console.log("capitalize:", capitalize("dingu"));
console.log("capitalize:", capitalize("dododile"));

// Chapter 3 Numbers , Convert number to string we use toString() , string to number we use Number.parseInt(value, 10). 10 is default and known as radix .

// converting number to string example !
function convertNumberToString(number) {
  return number.toString();
}

console.log("convertNumberToString:", convertNumberToString(42)); // "42"
console.log("convertNumberToString:", convertNumberToString(97)); // "97"

// converting string to number example !

function getBoxWidth(value) {
  return Number.parseInt(value, 10);
}

console.log("getBoxWidth:", getBoxWidth("15"));

// Chapter 5 Conditions

function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log("canVote:", canVote(25));
console.log("canVote:", canVote(18));
console.log("canVote:", canVote(10));

// Chapter 6 Arrays

function getNumberOfElements(elements) {
  // .length method
  return elements.length;
}

console.log("getNumberOfElements:", getNumberOfElements(["a", "b", "c"]));
console.log("getNumberOfElements:", getNumberOfElements([]));

// Arrays.Push Method is to add an array .

function useChatgpt(apps) {
  // arrays.push method
  apps.push("chatGPT");
  return apps;
}

console.log("useChatgpt:", useChatgpt(["Copilot", "instagram"]));
console.log("useChatgpt:", useChatgpt(["Programming"]));

// Accessing First Item from the Array !
function accessingFirstItem(item) {
  return item[0];
}

console.log(
  "accessingFirstItem:",
  accessingFirstItem(["Apples", "oranges", "pineapple"])
);

// Accessing Last item from the arrays

function accessingLastProduct(product) {
  return product[product.length - 1];
}

console.log(
  "accessingLastProduct:",
  accessingLastProduct(["Keyboard", "mouse", "charger"])
);

// Arrays .forEach method iterating over arrays

function logUserIds(userIds) {
  userIds.forEach(function (UserId) {
    // remmeber we change from singular to plural form
    console.log(UserId);
  });
}

console.log("logUserIds:", logUserIds([10, 15, 14]));

// Sum of all grades

function sumGrades(grades) {
  let sum = 0;
  grades.forEach(function (grade) {
    sum = sum + grade;
  });
  return sum; // remmeber that the return is outside the function in for each method .
}

console.log("sumGrades:", sumGrades([15, 5, 10]));
console.log("sumGrades:", sumGrades([12, 10, 13, 19]));

// Chapter 7 Arrays II & Callbacks Arrays .Filter Method

function findingOldCats(correctages) {
  return correctages.filter(function (correctage) {
    // remember the 2 returns in filter method
    return correctage >= 5;
  });
}

console.log("findingOldCats:", findingOldCats([1, 2, 11, 7, 15]));

// Array.find Method

function getYear(years, searchYear) {
  //difference between filter and find method is that filter will always return array [] and find will return first array item / undefined and matches the first condition that you specify
  return years.find(function (year) {
    return year === searchYear;
  });
}

console.log("getYear:", getYear([2019, 2020, 2021], 2020));
console.log(getYear([2019, 2020, 2021], 1990));

// Arrays.map Method allows you to transfrom the array into a new one !

let names = ["andromede", "orion"];
let capitalNames = names.map(function (name) {
  return name.toUpperCase();
});

console.log("capitalNames:", capitalNames);

// Another Example of array.map method

let numbers = [100, 200, 300];

let substractedNumbers = numbers.map(function (number) {
  return number - 50;
});

console.log("substractedNumbers:", substractedNumbers);

// Array .includes method , returns a boolean true/false

let groceries = ["Apple", "Peach", "Tomato"];

console.log("Groceries:", groceries.includes("Pomegranate"));
console.log("Groceries:", groceries.includes("Apple"));
console.log("Groceries:", groceries.includes("Oranges"));
console.log("Groceries:", groceries.includes("Andromede"));
console.log("Groceries:", groceries.includes("MANGO"));

// Array.Join Method // is to join , glue the strings together or modify the , between them !

const fruits = ["Apple", "Peach", "Tomato"];

console.log(fruits.join("; ")); // "Apple; Peach; Tomato"
console.log(fruits.join(" . ")); // "Apple . Peach . Tomato"

// Chapter 8 Objects !

function incrementAge(person) {
  person.age = person.age + 1;
  return person;
}

const person = {
  firstName: "Dingu",
  lastName: "TheFrog",
  age: 18,
};
console.log("incrementAge:", incrementAge(person));

let user = {
  id: 1,
  firstName: "Dodo",
  lastName: "Dile",
  age: 20,
};

user.lastName = "Dingu";
user.age = user.age + 1;
console.log(user);

// Chapter 9 Arrow Functions !
