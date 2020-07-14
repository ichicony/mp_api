var express = require('express');
var router = express.Router();
const sql=require('../db/SqlHelper')

router.get('/drxs', function(req, res, next) {
    console.log(req.query)
    sql.query(`select * from xsjl where jzrq='${req.query.jzrq}'`,(err,recordset)=>{
        if(err){
          console.log(err)
          res.send(err)
        }else{
          res.send(recordset.recordset)
        }
      })
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('api is running..');
});




module.exports = router;