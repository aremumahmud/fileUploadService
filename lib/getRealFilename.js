function getRealName(name, note){
  var extName = name.split(".")
  var ntName = note.split(".")
  if(extName.length == 1){
    return note?note:name
  }else if(extName.length > 1 && ntName.length == 1){
    var ext = extName.pop()
    return note + "." + ext
  }else if(extName.length > 1 && ntName.length > 1){
    return note
  }
  
}


console.log(getRealName("index.js","fame.js"))
module.exports = getRealName