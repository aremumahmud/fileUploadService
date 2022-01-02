
function getFromSpace(req , res){
  
  var { space , file } = req.query
  var path =  "space/"+space+"/"+file
  console.log(path)
  res.download(path , err =>{
    if(err){
      res.send("error")
      console.log(err , path)
    }
  })
  
}

module.exports = getFromSpace