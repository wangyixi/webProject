var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({ //定义数据模型
    name: String,
    password: String
});
mongoose.model('users', UserSchema); //将该Schema发布为Model