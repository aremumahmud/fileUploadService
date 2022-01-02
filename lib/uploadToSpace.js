var processFiles = require("./processFiles")

function uploadToSpace(req, res){
  if(!req.files){
    res.send("no files were uploaded")
  }else{
    var { files} = req 
    var space = req.body.space
    var filechanges = req.body
    var fileKey = Object.keys(files)
    var count = 1
    var processed;
    var failed;
    var fileOrder = fileKey.map(key=>{
      var keyCount = count
      count ++
      return {
        file : files[ key ],
        note : filechanges["note" + keyCount] ? filechanges["note" + keyCount] : null
      }
    })
   // res.send("hey")
    console.log(fileOrder)

   processFiles(space , fileOrder).then(resp=>{
     processed = resp
     res.send(JSON.stringify({
       processed
     }, null , 2))
     console.log(processed)
   })
  }
}


module.exports = uploadToSpace