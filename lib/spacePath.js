function returnSpacePath(space){
  var path  = __dirname
  var dirs = path.split("/")
  dirs.pop()
  return (dirs.join("/") + "/space/" + space)
}

console.log(returnSpacePath("hello"))
module.exports = returnSpacePath