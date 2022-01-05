"use strict"

var fs = require('fs')
//var testfs = require("./test")
var spacePath = require("./spacePath")
function createSpace(req , res){
  var spaceFile;
  var { space , index } = req.body
    var pathToSpace = spacePath(space)
  fs.mkdir(pathToSpace , err=>{
    console.log(err)
    if(err){
      res.json({
        "error" : true ,
        "msg" : "error creating directory"
      })
    }else {
      spaceFile = (spacePath(space) + "/"+space+".txt")
      fs.writeFile(spaceFile, index , err=>{
        if(err){
          //remove directory
          fs.rmdir(pathToSpace ,(err)=>{
            res.send("error")
          })
        }else{
          res.send("sucess")
          console.log(pathToSpace , spaceFile)
        }
      })
      //res.send("sucess")
    }
  })
  
}

module.exports = createSpace
