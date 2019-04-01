#!/usr/bin/env node
"use strict";

//Require Node Modules
var inquirer = require("inquirer");
var cliFormat = require('cli-format');
var chalk = require("chalk");
var gradient = require('gradient-string');
var figlet = require("figlet");
var boxen = require('boxen');
var terminalLink = require('terminal-link');


//Colors
var white = chalk.bold.white;
var blue = chalk.bold.blue;
var banner = gradient.mind(figlet.textSync('Dustin McGilvray', {font: "Small", horizontalLayout: "full", verticalLayout: "default"}));

//Set resume keys to variables
var resume = require("./resume.json");
var summaryInfo = resume.Summary;
var educationInfo = resume.Education;
var professionalInfo = resume.Professional;
var techSkills = resume.Technical;
var projectsInfo = resume.Projects;
var aptitudesInfo = resume.Core;
var contactInfo = resume.Contact;


var resumePrompts = {
    type: "list",
    name: "options",
    message: "What would you like to know about me?",
    choices: ["Summary", "Education", "Professional Experience", "Technical Skills", "Focal Projects", "Core Aptitudes", "Contact", "Exit"],
    pageSize: 8  
};

function main() {
    console.log(
        boxen(banner, {borderStyle: 'round', borderColor: 'yellow', backgroundColor: '', dimBorder: true, }));
    console.log(
        chalk.bold.yellow("Hello, Welcome to Dustin McGilvray's CLI Resume."));
        options();
};

function options() {
    inquirer.prompt(resumePrompts).then(function(answer) {
        switch(answer.options){
            case "Summary":
                summary();
                backExit();
                break;
            case "Education":
                education();
                backExit();
                break;
            case "Professional Experience":
                experience();
                backExit();
                break;
            case "Technical Skills":
                technical();
                backExit();
                break;
            case "Focal Projects":
                projects();
                backExit();
                break;
            case "Core Aptitudes":
                core();
                backExit();
                break;
            case "Contact":
                contact();
                backExit();
                break;
            case "Exit":
                return;
        }
        });
    };

    function backExit() {
        inquirer.prompt([
            {
                type: "list",
                name: "backExit",
                message: "Return to Resume' or Exit?",
                choices: ["Resume'", "Exit"]
            }
        ]).then(function(answers){
        switch (answers.backExit) {
            case "Resume'":
                options();
                break
            case "Exit":
                return;
                }
            })
        }

    function summary(){
        console.log("\n")     
            console.log(white(cliFormat.wrap((white(summaryInfo)))));     
        console.log("\n");
            };

    function education() {
        console.log("\n");
            for(var i = 0; i<educationInfo.length; i++){
                for(var key in educationInfo[i]){
                    console.log(blue(key + ":" + cliFormat.wrap(white(educationInfo[i][key]))))
                };
        console.log("\n")
        }
    };

    function experience() {
        console.log("\n");
            for(var i = 0; i<professionalInfo.length; i++){
                for(var key in professionalInfo[i]){
                    console.log(blue(key + ":" + cliFormat.wrap(white(professionalInfo[i][key]))))
                };
        console.log("\n")
        }
    };

    function technical() {
        console.log("\n");
            for(var i = 0; i<techSkills.length; i++){
                for(var key in techSkills[i]){
                    console.log(blue(key + ":" + cliFormat.wrap(white(techSkills[i][key]))))
                };
        console.log("\n")
        }
    };

    function projects() {
        console.log("\n");
        for(var i = 0; i<projectsInfo.length; i++){
            for(var key in projectsInfo[i]){
                console.log(blue(key + ":" + cliFormat.wrap(white(projectsInfo[i][key]))))
            };
    console.log("\n")
    }
    };

    function core() {
        console.log("\n");
            for(var i = 0; i<aptitudesInfo.length; i++){
                for(var key in aptitudesInfo[i]){
                    console.log(blue(key + ":" + cliFormat.wrap(white(aptitudesInfo[i][key]))))
                };
        console.log("\n")
        }
    };

    function contact() {
        console.log("\n");
        for(var i = 0; i<contactInfo.length; i++){
            for(var key in contactInfo[i]){
                console.log(blue(key + ":" + cliFormat.wrap(white(contactInfo[i][key]))))
            };
    console.log("\n")
    }
    };

main();