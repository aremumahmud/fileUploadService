var express = require("express")
var router = express.Router()
var createSpace = require("../lib/createSpace")
var uploadToSpace = require("../lib/uploadToSpace")
var getFromSpace = require("../lib/getFromSpace")
var getRawFile = require("../lib/getRawFile")



router 
     .route("/createSpace")
     .get(createSpace)
router
    .route("/uploadToSpace")
    .post(uploadToSpace)
router
    .route("/getFromSpace")
    .get(getFromSpace)
router
    .route("/getRawFile")
    .get(getRawFile)


    
    
module.exports = router
