var express = require('express');
var app = express();
var myMassage = function(req,res,next){
    console.log('I love computer');
    next();
}
app.use(myMassage);
app.get('/',function(req,res){
    res.send('I love BUU');
});
app.listen(8081);