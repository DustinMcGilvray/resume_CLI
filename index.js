#!/usr/bin/env node
"use strict";

var inquirer = require("inquirer");
var chalk = require("chalk");

var response = chalk.bold.white;

var resume = require("./resume.json");

var resumePrompts = {
    type: "list",
    name: "resumeOptions",
    message: "What would you like to know about me?",
    choices: [...Object.keys(resume), "Exit"]
};

function main() {
    console.log("Hello, Welcome to Dustin McGilvray's CLI Resume.");
    resumeHandler();
};

function resumeHandler() {
    inquirer.prompt(resumePrompts).then(answer => {
        if (answer.resumeOptions == "Exit") {
            return;
        }
        var option = answer.resumeOptions;
        console.log(response("---------------------------------------------------"));
        resume[`${option}`].forEach(info => {
            console.log(response(info));
        });

        console.log(response("---------------------------------------------------"));
        inquirer
            .prompt({
                type: "list",
                name: "exitBack",
                message: "Go Back or Exit?",
                choices: ["Go Back", "Exit"]
            })
            .then(choice => {
                if (choice.choices == "Go Back") {
                    resumeHandler();
                } else {
                    return;
                }
            });
    });
}

main();