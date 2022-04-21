const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//settings

app.set('port', process.env.PORT || 3000 );
app.set ('viwe engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(morgan('dev'));
app.use(myConnection(mysql,{
  host: "sql5.freemysqlhosting.net",
  user: "sql5471641",
  password: "qncHUIPC4E",
  database : "sql5471641",
  port: '3306',
    
  }, 'single' ));

app.listen(app.get('port'), ()=>{
    console.log('Server on port 3000');
});

app.use('/', CostumerRoutes);

const CostumerRoutes =   require('../');