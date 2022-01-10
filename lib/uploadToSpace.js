var processFiles = require("./processFiles")
var axios = require("axios")
function uploadToSpace(req, res){
  if(!req.files){
    res.send("no files were uploaded")
  }else{
    var { files} = req 
    var space = req.body.space
    var url = req.body.url
    var url1 = req.body.url1
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
        var data = JSON.stringify({
       processed
     }, null , 2)
     
     axios.get(url, {
    params: {
      data,
      space
    }
  })
  .then(function (response) {
    console.log(response);
    res.redirect(url1+ space)
  })
  .catch(function (error) {
    console.log(error);
    res.send("error")
  })
  
   })
  }
}


module.exports = uploadToSpace
