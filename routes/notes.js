var express = require('express');
var router = express.Router();
//URI指定
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://tanakadayo1018:xxxxxxxxx@cluster0.s9mcp.mongodb.net/";
const client = new MongoClient(uri);

router.get('/',async(req,res)=>{
//database,collection指定
const database=client.db('notes');
const notes=database.collection('notes');

//ドキュメントを取得し、表示する
const query={id:1};
note=await notes.findOne(query);
res.json(note);
})
module.exports=router;