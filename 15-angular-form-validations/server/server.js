const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const cors = require('cors');

// configure express with cors
app.use(cors());

// configure dotEnv
dotEnv.config({path : './config/config.env'});

// hostname , port
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

// configure Express to receive the form data
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// default request
app.get('/', (request , response) => {
  response.send(`<h2>Welcome to Express Server</h2>`);
});

// configure router
app.use('/user' , require('./router/userRouter'));

app.listen(port, hostname, () => {
  console.log(`Express server is started... at http://${hostname}:${port}`);
});
