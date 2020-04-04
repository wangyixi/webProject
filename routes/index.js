var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'webProject' });
});
/* GET login page.*/
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'User login' });
}).post(function(req, res){
	//验证user
});
/* GET register page.*/
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'User register' });
}).post(function(req, res){
	//注册user
});
/* GET home page. */
router.get("/home",function(req,res){ 
    //判断是否登录
    res.render("home",{title:'Home'});
});
/* GET logout page. */
router.get("/logout",function(req,res){
    //删除用户
	//重定向至index
    res.redirect("/");
});

module.exports = router;
