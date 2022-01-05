var express = require("express")
var upload = require("express-fileupload")
var bodyparser =  require("body-parser")
var router = require("./router/router")

var app = express()
app.use(upload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(bodyparser())
app.use("/api" , router)
app.listen(process.env.PORT || 2000)
app.post("/" ,(req, res)=>{
  console.log(req.files ,req.body)
  res.send("sucess")
})
app.get("/" ,(req, res)=>{
  res.send(`
  <form method="post" action="/api/uploadToSpace"  enctype="multipart/form-data">
  <input type="file" name="one"/>
 <input type="text" name="note1"/>
   <input type="file" name="onej"/>
 <input type="text" name="note2"/>
   <input type="file" name="ojne"/>
 <input type="text" name="note3"/>
 <input type="text" name="space"/>
  <input type="submit" />
  </form>
  `)
})
console.log(__dirname)
