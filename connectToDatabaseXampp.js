const mysql = require('mysql')
var express = require('express');
const path = require('path')
const fs = require('fs');
var app = express();

// Express

app.get('/', function (req, res,next) {
    res.writeHead(200, {'content-type': 'text/html'})
    //res.send("./index.html");
    fs.createReadStream('index.html').pipe(res);
    // res.sendFile('main.js', {root: path.join(__dirname)}, (err) => {
    //     if (err) {
    //         next(err);
    //     } else {
    //         console.log('File Sent:', 'main.js');
    //     }
    // });
 })

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://", host, port)
})


// Database MySql

const conection = mysql.createConnection(
    {host: 'localhost',
    user: 'user',
    password: 'user',
    database: 'platziblog'
    }
)

conection.connect( (err)=> {
    if(err) throw err
    console.log('conection works');
})

//const insert = "INSERT INTO users (name,email,age) VALUES ('name','name@gmail.com',3)"
const insert = "DELETE FROM usuarios WHERE email=NULL"

conection.query(insert,(err,rows) => {
    if(err) throw err
})

conection.query('SELECT * FROM usuarios', (err,rows)=> {
    if(err) throw err
    usuarios = [];
    rows.forEach(row => {
        dataRow = {
            ID: row.id,
            Login: row.login,
            Nickname: row.nickname,
            Password: row.password,
            Email: row.email}
        usuarios.push(dataRow);
    })
    app.get('/usuarios', function (req, res) {
        res.send(usuarios);
     })
})

conection.end()
console.log("conection ended");