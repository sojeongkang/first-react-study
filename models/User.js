const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,     //띄어쓰기 없애줌
        unique: 1     //중복 방지
    },
    password: {
        type: String, 
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {     //관리자와 일반유저 구분
        type: Number,
        default: 0
    },
    image: String,
    token: {    //유효성 관리
        type: String
    },
    tokenExp: { //토큰 사용 유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)     //스키마를 모델로 감싸줌

module.exports = { User }   //이 모델을 다른 곳에서도 쓸 수 있도록