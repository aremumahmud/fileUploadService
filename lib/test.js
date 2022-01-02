function testfs(){
  this.count=0
  this.mkdir=(path , callback)=>{
    console.log("mkdir sucess")
    callback(false)
  }
  this.writeFile=(a , b ,c)=>{
    console.log("writeFile sucess")
    c(this.count==2?false:true)
    this.count++
  }
  this.rmdir=(a,c)=>{
    console.log("rmdir sucess")
    c(false)
  }
}
module.exports = new testfs()