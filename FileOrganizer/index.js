let inputArr = process.argv.slice(2);
const fs= require('fs');
const path= require('path');
// console.log(inputArr);
// console.log("helloo");

// example of command 
// node indexe.js tree "directoryPath"
// node index.js oragnize "directoryPath"
// node index.js help 

let command=inputArr[0];
switch(command){
    case "tree":
        treeFn(inputArr[1]);
        break;
    case "organize":
        organizeFn(inputArr[1]);
        break;
    case "help":
        helpFn();
        break;
    default:
        console.log("Please enter a valid command");
        break;
}

function treeFn(dirPath){
}
function organizeFn(dirPath){
    // Step-1: we have to choose the path where we have to oragnize the files \
    // console.log('dirPAth is :',dirPath);
    let destinationPath;
    if(dirPath== undefined){
        console.log('kindly enter the path')
        return;
    }else{
        let doesExist =fs.existsSync(dirPath);
        if(doesExist){
            // Step-2: we have to make an folder named as organize folder 
             destinationPath=path.join(dirPath,"organized-files");
            if (!fs.existsSync(destinationPath)) {
            fs.mkdirSync(destinationPath);
            console.log("Folder created successfully");
        }else{
            console.log('kindly enter the correct path');
            return;
        }
    }
        oragnizeHelper(dirPath,destinationPath);
    }
    // Step-4:  cut/copy the files into the category folder
    function oragnizeHelper(src,dest){
        // Step-3: identify the type of files and categorize them 
        let childNames=fs.readdirSync(src);
        console.log(childNames);
     }
}
function helpFn(){
    console.log(`
    node indexe.js tree "directoryPath"
    node index.js oragnize "directoryPath"
    node index.js help 
    `)
    // console.log(__dirname);
}