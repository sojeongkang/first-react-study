const express = require('express')   //express 모듈을 가져옴
const app = express()   //function을 이용해 새로운 express 앱을 만듦
const port = 5000       //백엔드서버 포트번호
const bodyParser = require('body-parser');    //bodyparser가 서버에서 오는 정보를 분석해서 가져옴

const config = require('./config/key');

const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sjkang:ksj2021016@boilerplate.wfquk.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false  //에러잡기
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! nodemon까지 설치완료!! 이제 자자')  //루트 디렉터리에 오면 헬로월드 출력
})

app.post('/register', (req, res) => {
  //회원가입할 때 필요한 정보들을 client에서 가져오면 
  //그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)
    //bodyparser를 이용해서 req.body로 클라이언트가 보낸 정보를 받아옴

    user.save((err, doc) => {
      if(err) return res.json({ success: false, err })
      return res.status(200).json({   //성공
        success: true
      })
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})  //포트 5000번에서 앱 실행