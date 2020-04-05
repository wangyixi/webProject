var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'webProject'
	});
});
/* GET login page.*/
router.get('/login', function(req, res, next) {
	res.render('login', {
		title: 'User login'
	});
}).post(function(req, res) {
	//验证user
	var name = req.body.name; //post方式在信息在请求体中
	var pwd = req.body.password;
	var User = mongoose.model('users'); //获取user对象
	User.findOne({
		name: name
	}, function(err, doc) { //通过此model以用户名的条件 查询数据库中的匹配信息
		if (err) {
			res.send(500);
			console.log(err);
		} else if (!doc) { //用户名不存在
			res.send(404);
		} else {
			if (pwd != doc.password) { //password不匹配
				res.send(404);
			} else { //信息匹配成功
				res.send(200);
				res.redirect("/home");
			}
		}
	});
});
/* GET register page.*/
router.get('/register', function(req, res, next) {
	res.render('register', {
		title: 'User register'
	});
}).post(function(req, res) {
	//注册user
	var name = req.body.name; //post方式在信息在请求体中
	var pwd = req.body.password;
	var User = mongoose.model('users'); //获取user对象
	User.findOne({
		name: uname
	}, function(err, doc) {
		if (err) {
			res.send(500);
			console.log(err);
		} else if (doc) { //用户名已存在
			res.send(500);
		} else {
			User.create({ // 创建一组user对象置入model
				name: name,
				password: pwd
			}, function(err, doc) {
				if (err) {
					res.send(500);
					console.log(err);
				} else { //创建成功
					res.send(200);
				}
			});
		}
	});
});
/* GET home page. */
router.get("/home", function(req, res) {
	//判断是否登录
	if (!req.session.user) {
		res.redirect("/login"); //未登录则重定向至登录界面
	}
	res.render("home", {
		title: 'Home'
	});
});
/* GET logout page. */
router.get("/logout", function(req, res) {
	//删除用户
	req.session.user = null;
	//重定向至index
	res.redirect("/");
});

module.exports = router;
