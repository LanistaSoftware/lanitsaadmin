const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
var session = require('express-session')
const cookieparser = require('cookie-parser');
const MongoDBStore = require('connect-mongodb-session')(session);
const connectstr = 'mongodb://localhost:27017/gladioadmin';
const mongoose = require('mongoose');
// const iplocation = require("iplocation").default;
// iplocation('92.45.194.68', [], (error, res) => {
 
//     console.log(res.ip)
 
// });
//Middleware

app.use(bodyParser.urlencoded({
  extended: false
}));
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
app.use(cors({
}));

const makalerouter = require('./api/controller/blog')
app.use('/api',makalerouter);

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