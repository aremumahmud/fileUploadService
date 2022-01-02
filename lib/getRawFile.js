var spacePath = require("./spacePath")

function getRawFile(req , res){
  var { space , file } = req.query
  var filePath = spacePath(space)+"/"+file
  res.sendFile(filePath)
}

module.exports = getRawFile