var express = require('express');
var router = express.Router();
const sql=require('../db/SqlHelper')



router.get('/all',(req, res, next)=>{
  // let result1 =  connection.request().query("select * from users")
  sql.query("select * from users",(err,recordset)=>{
    if(err){
      console.log(err)
      res.send(err)
    }else{
      res.send(recordset.recordset)
    }
  })
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
