const express = require('express');
const app = express();
const cors = require('cors');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');

// configure cors
app.use(cors());

// configure json to receive form data
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// configure dotEnv
dotEnv.config({path : './config/config.env'});

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

// configure mongodb
mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
  useCreateIndex : true,
  useFindAndModify : false,
  useNewUrlParser : true,
  useUnifiedTopology : true
}).then((response) => {
  console.log('Connected to database successfully...........');
}).catch((error) => {
  console.error(error);
  process.exit(1); // stop the node js process..
});

app.get('/' , (request , response) => {
  response.send(`<h2>Welcome to Events Booking Express Server</h2>`);
});

// configure Routers
app.use('/events' , require('./router/eventRouter'));
app.use('/users' , require('./router/userRouter'));

// listen
app.listen(port, hostname, () => {
  console.log(`Express Server is started at http://${hostname}:${port}`);
});
