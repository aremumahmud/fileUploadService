var express = require("express")
var fs = require("fs")
var router = express.Router()
var createSpace = require("../lib/createSpace")
var uploadToSpace = require("../lib/uploadToSpace")
var getFromSpace = require("../lib/getFromSpace")
var getRawFile = require("../lib/getRawFile")
var serverId = fs.readFileSync("serverId.txt").toString()



router 
     .route("/createSpace")
     .get(createSpace)
router
    .route("/uploadToSpace")
    .post((req ,res)=>{
        uploadToSpace(req , res , serverId)
    })
router
    .route("/getFromSpace")
    .get(getFromSpace)
router
    .route("/getRawFile")
    .get(getRawFile)


    
    
module.exports = router
