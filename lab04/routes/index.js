var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express' });
});

router.get('/login',function(req,res,next){
  res.render('login.ejs');//** */
});
router.post('/result',function(req,res){
  res.render('result.ejs',{ user:req.body.user,
                            pass:req.body.pass
                          });
})
router.post('/report',function(req,res){
  var errorInput = [];
  if(req.body.id.length > 13){
    errorInput.push('หมายเลขบัตรประจำตัวประชาชน');
  }
  if(req.body.zip.length > 5){
    errorInput.push('รหัสไปรษณีย์');
  }
  if(req.body.tel.length > 9){
    errorInput.push('โทรศัพท์');
  }
  if(req.body.tel2.length > 9){
    errorInput.push('โทรสาร');
  }
  if(req.body.phone.length > 10){
    errorInput.push('โทรศัพท์มือถือ');
  }
  if(!(/\S+@\S+\.\S+/.test(req.body.email))){
    errorInput.push('อีเมล');
  }

  if(errorInput.length == 0 ){
    res.render('report.ejs',{ 
                id:req.body.id,
                type:req.body.type,
                first:req.body.first,
                last:req.body.last,
                nick:req.body.nick,
                date:req.body.date,
                province:req.body.province,
                district:req.body.district,
                canton:req.body.canton,
                number:req.body.number,
                street:req.body.street,
                zip:req.body.zip,
                tel:req.body.tel,
                tel2:req.body.tel2,
                phone:req.body.phone,
                email:req.body.email
    });
  }else{
    res.send("ข้อมูลผิดพลาด : "+errorInput);
  }
})

module.exports = router;
