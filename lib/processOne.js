var fs = require("fs")
var spacePath = require("./spacePath")
var getRealFilename = require("./getRealFilename")


function processOne(space , filename , note, data ){
  var Rfilename = note?getRealFilename(filename,note):filename
  console.log(space ,"space")
  var path = spacePath(space) + "/" + Rfilename
  return new Promise((res, rej)=>{
    fs.writeFile(path ,data ,err=>{
      console.log({path , data})
      if(err){
         res({
           file : Rfilename ,
           error : true
         })
      }else {
        res({
          file : Rfilename ,
          error : false
        })
      }
    })
  })
}

module.exports = processOne
