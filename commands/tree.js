const fs= require("fs");
const path=require("path");
function treeFn(dirPath){
     if (dirPath == undefined) {
        console.log("Kindly enter the path");
        return;
    }

    // Step 2: check if the given path exists
    let doesExist = fs.existsSync(dirPath);
    if (doesExist) {
        treeHelper(dirPath,"");
    }
}
function treeHelper(dirPath,indent){
    let isFile= fs.lstatSync(dirPath).isFile();
    if(isFile==true){
        let fileName=path.basename(dirPath);
        console.log(indent+"|-"+fileName);
    }else{
        let dirName= path.basename(dirPath);
        console.log(indent+"~"+dirName);
        let childrens= fs.readdirSync(dirPath);
        for(let i=0;i<childrens.length;i++){
            let childPath= path.join(dirPath,childrens[i]);
            treeHelper(childPath,indent+"\t")
        }
    }
}

module.exports={
    treeKey: treeFn
}