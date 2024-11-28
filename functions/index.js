const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet')
const hpp = require('hpp')
const dotenv = require("dotenv");
dotenv.config()

const pageRouter = require('./Router/page.js');
const adminRouter = require('./Router/admin.js');
//set 메서드
app.set('view engine', 'ejs');
app.set('html',require('ejs').renderFile);
app.set('views', __dirname + '/views');

app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: false,
}))
app.use(hpp())

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(__dirname +'/static'));

app.use('/',pageRouter);
app.use('/admin',adminRouter);
app.use((req,res,next)=>{
  res.render('error',{'error':'404 error'});
})
// Firebase Functions를 사용하여 Express 앱을 onRequest 핸들러로 래핑하여 배포
exports.app = functions.region("asia-northeast3").https.onRequest(app);