#!/usr/bin/env node
// this above code is none as shebang syntax:this is used to tell os which environment you have to use while executing this file 
let inputArr = process.argv.slice(2);
const fs= require('fs');
const path= require('path');
const helpObj= require("../commands/help");
const treeObj= require("../commands/tree");
const organizeObj=require("../commands/organize");
const utilityObj= require("../utility")
// console.log(inputArr);
// console.log("helloo");

// example of command 
// node indexe.js tree "directoryPath"
// node index.js oragnize "directoryPath"
// node index.js help 

let command=inputArr[0];
let destinationPath ; 
let types = utilityObj.utilityKey;
switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please enter a valid command");
        break;
}



