#!/usr/bin/env node
"use strict";

//Require Node Modules
var inquirer = require("inquirer");
var cliFormat = require('cli-format');
var chalk = require("chalk");
var gradient = require('gradient-string');
var figlet = require("figlet");
var boxen = require('boxen');

//Colors
var white = chalk.bold.white;
var grayDim = chalk.dim.gray;
var cyan = chalk.cyan;
var bgCyan = chalk.inverse.cyanBright;
var banner = gradient.mind(figlet.textSync('Dustin McGilvray', {font: "Small", horizontalLayout: "default", verticalLayout: "default"}));
var welcome = chalk.bold.cyan;

//Set resume keys to variables
var resume = require("./resume.json");
var summaryInfo = resume.Summary;
var educationInfo = resume.Education;
var professionalInfo = resume.Professional;
var techSkills = resume.Technical;
var projectsInfo = resume.Projects;
var aptitudesInfo = resume.Core;
var contactInfo = resume.Contact;

//Set initial Inquirer Prompt
var resumePrompts = {
    type: "list",
    name: "options",
    message: bgCyan("What would you like to know about me?"),
    choices: ["Summary", "Education", "Professional Experience", "Technical Skills", "Focal Projects", "Core Aptitudes", "Contact", "Exit"],
    pageSize: 8  
};

//Functions
function main() {
    console.log(
        boxen(banner, {borderStyle: 'round', borderColor: 'cyan', backgroundColor: 'black', dimBorder: true, }));
    console.log(
        welcome("Hello, Welcome to Dustin McGilvray's CLI Resume."));
        options();
};

function options() {
    console.log("\n");
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
                    console.log(cyan(key + ":" + cliFormat.wrap(white(educationInfo[i][key]))))
                };
        console.log("\n")
        }
    };

    function experience() {
        console.log("\n");
            for(var i = 0; i<professionalInfo.length; i++){
                for(var key in professionalInfo[i]){
                    console.log(cyan(key + ":" + cliFormat.wrap(white(professionalInfo[i][key]))))
                };
        console.log("\n")
        }
    };

    function technical() {
        console.log("\n");
            for(var i = 0; i<techSkills.length; i++){
                for(var key in techSkills[i]){
                    console.log(cyan(key + ":" + cliFormat.wrap(white(techSkills[i][key]))))
                };
        console.log("\n")
        }
    };

    function projects() {
        console.log("\n");
        for(var i = 0; i<projectsInfo.length; i++){
            for(var key in projectsInfo[i]){
                console.log(cyan(key + ":" + cliFormat.wrap(white(projectsInfo[i][key]))))
            };
        console.log(grayDim("Press and Hold Command Key and Double-Click Link to View Link."));
        console.log("\n")
    }
    };

    function core() {
        console.log("\n");
            for(var i = 0; i<aptitudesInfo.length; i++){
                for(var key in aptitudesInfo[i]){
                    console.log(cyan(key + ":" + cliFormat.wrap(white(aptitudesInfo[i][key]))))
                };
        console.log("\n")
        }
    };

    function contact() {
        console.log("\n");
        for(var i = 0; i<contactInfo.length; i++){
            for(var key in contactInfo[i]){
                console.log(cyan(key + ":" + cliFormat.wrap(white(contactInfo[i][key]))))
            };
        console.log(grayDim("Press and Hold Command Key and Double-Click Link to View Link."));
        console.log("\n")
    }
    };

main();