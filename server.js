const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//routers
const router = require('./network/routes');

//settings
app.set('port',process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));//use for form primitive

//send to server for routes
router(app);

//start server
app.listen(app.get('port'),()=>{
    console.log("http://localhost:3000");
});
