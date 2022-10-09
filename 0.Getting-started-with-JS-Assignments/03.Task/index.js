//importing library for using prompt in NODE JS
// const prompt = require("prompt-sync")();

const myTitleCaseFunction = (userName) => {
  return userName
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};
const userName = prompt("Nam kya hy apka?", "tHis iS deFauLt MesSAge");

console.log(`“Hello ${userName.toLowerCase()} in lower Case"`);
console.log(`“Hello ${userName.toUpperCase()} in upper case"`);
console.log(`“Hello ${myTitleCaseFunction(userName)} in title case"`);
