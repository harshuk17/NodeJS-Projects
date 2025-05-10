let inputArr = process.argv.slice(2);
console.log(inputArr);
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
}
function helpFn(){
    console.log(`
    node indexe.js tree "directoryPath"
    node index.js oragnize "directoryPath"
    node index.js help 
`)
}