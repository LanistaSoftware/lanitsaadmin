const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
var session = require('express-session')
const cookieparser = require('cookie-parser');
const MongoDBStore = require('connect-mongodb-session')(session);
const connectstr = 'mongodb+srv://lanista:lanista2020@lanistateam-tq8uo.mongodb.net/node-application?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const multer = require('multer')
const userrouter = require('./api/controller/usercontroller')    
const blogcontroller = require('./api/controller/blogcontroller')
const morgan = require('morgan')

app.use(morgan('dev'))
var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200
}
app.use(bodyParser.urlencoded({
  extended: false, 
}));
app.use(bodyParser({limit: '500mb'}));
const storage = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null,'./public/img');
  },
  filename:function (req,file,cb) {
      cb(null,file.fieldname +'-'+Date.now()+path.extname(file.originalname));
  }
})
app.use(multer({storage:storage}).single('img'));

app.use(cookieparser());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 180000
  },
  store: store
}))


var store = new MongoDBStore({
  uri: connectstr,
  collection: 'mySessions'
});
app.use(bodyParser.json());
app.use(cors(corsOptions));



app.use('/api/user',userrouter);
app.use('/api/blog',blogcontroller);

const port = process.env.PORT || 3000;
mongoose.connect(connectstr, { useNewUrlParser: true ,useUnifiedTopology: true }); 
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to db established"));

app.set('view engine', ['css','icon']);

app.set('views','../assets/css');

app.use(express.static(path.join(__dirname, '../assets/css/')));

app.listen(port, () => {
  console.log(`server started on port ${port}`)
});