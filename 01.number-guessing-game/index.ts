#!/usr/bin/env node
import figlet from "figlet";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
// import chalk from 'chalk';

console.log(`| Guess a Number between 1 to 10 |`);

const startFunction = async () => {
  // const rainbow = chalkAnimation.rainbow("Let's start Calculating");
  //   setTimeout(() => {
  //     rainbow.stop();
  //   }, 2000);

  const { num } = await inquirer.prompt({
    type: "number",
    name: "num",
    message: "Enter a Number = ",
  });

  const randomNumber = Math.round(Math.random() * 10);
  console.log("🚀 ~ file: randomNumber:", randomNumber);

  if (num !== randomNumber) console.log("you have gussed wrong number");
  else if (num === randomNumber) console.log("you have gussed wrong number");
  // else if (num === randomNumber) console.log("");
  else {
    console.log("ERROR");
  }
};

let restart;
do {
  await startFunction();
  restart = await inquirer.prompt({
    type: "input",
    name: "restart",
    message: "Do you want to restart? Yes or No",
  });
} while (
  restart.restart.toLowerCase() === "yes" ||
  restart.restart.toLowerCase() === "y"
);
