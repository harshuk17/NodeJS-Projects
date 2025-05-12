const fs= require("fs");
const path=require("path");
const utilityObj= require("../utility")
let types = utilityObj.utilityKey;

function organizeFn(dirPath) {
    // Step 1: check if the path is provided
    if (dirPath == undefined) {
        console.log("Kindly enter the path");
        return;
    }

    // Step 2: check if the given path exists
    let doesExist = fs.existsSync(dirPath);
    if (!doesExist) {
        console.log("Kindly enter the correct path");
        return;
    }

    // Step 3: make organized-files folder inside given dirPath
     destinationPath = path.join(dirPath, "organized-files");
    if (!fs.existsSync(destinationPath)) {
        fs.mkdirSync(destinationPath);
        console.log("Folder 'organized-files' created successfully");
    } else {
        console.log("Folder 'organized-files' already exists");
    }

    // Step 4: organize the files
    organizeHelper(dirPath, destinationPath);
}

function organizeHelper(src, dest) {
    let childNames = fs.readdirSync(src); // all files/folders in src

    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile(); // use lstatSync

        if (isFile) {
            // console.log("File found:", childNames[i]);
            // You can implement logic here to move/categorize files into folders
            let category= getCategory(childNames[i]);

            sendFile(childAddress,destinationPath,category);
        }
    }
}
function sendFile(srcPath,destPath,category){
    let categoryPath= path.join(destPath,category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let fileName= path.basename(srcPath);
    let destFilePath= path.join(categoryPath,fileName);
    fs.copyFileSync(srcPath,destFilePath);
    fs.unlinkSync(srcPath);
}
function getCategory(file){
    let extension= path.extname(file).slice(1).toLowerCase(); ;
    // console.log(`extesnion of ${file} is ${extenssion}`);
     for(type in types){
        let cTypeArray= types[type];
        for(let i=0;i<cTypeArray.length;i++){
            if(cTypeArray[i]==extension){
                return type
            }
        }
    }


}
module.exports={
    organizeKey:organizeFn
}