function helpFn(){
    console.log(`
    node indexe.js tree "directoryPath"
    node index.js oragnize "directoryPath"
    node index.js help 
    `)
    // console.log(__dirname);
}
module.exports={
    helpKey: helpFn
}