"use strict"

var fs = require('fs')
var testfs = require("./test")
var spacePath = require("./spacePath")
function createSpace(req , res){
  var spaceFile;
  var { space , index } = req.query
    var pathToSpace = spacePath(space)
  testfs.mkdir(pathToSpace , err=>{
    
    if(err){
      res.json({
        "error" : true ,
        "msg" : "error creating directory"
      })
    }else {
      spaceFile = (spacePath(space) + "/"+space+".txt")
      testfs.writeFile(spaceFile, index , err=>{
        if(err){
          //remove directory
          testfs.rmdir(pathToSpace ,(err)=>{
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