const express = require('express')   //express 모듈을 가져옴
const app = express()   //function을 이용해 새로운 express 앱을 만듦
const port = 5000       //백엔드서버 포트번호

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sjkang:ksj2021016@boilerplate.ac4bf.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false  //에러잡기
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')  //루트 디렉터리에 오면 헬로월드 출력
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})  //포트 5000번에서 앱 실행