var processOne = require("./processOne")

function ProcessFiles(space,files){
  var filesToBeProcessed = files.map(file=>{
    console.log(space ,file.file.name)
    return processOne(space ,file.file.name,file.note,file.file.data)
  })
  return Promise.all(filesToBeProcessed)
  
}
 module.exports = ProcessFiles