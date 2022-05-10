const root = document.getElementById('root')
const mysql = require('mysql')

let html = '';

const conection = mysql.createConnection(
    {host: 'localhost',
    user: 'user',
    password: 'user',
    database: 'databaseexample'
    }
)

conection.connect( (err)=> {
    if(err) throw err
    console.log('conection works');
})

//const insert = "INSERT INTO users (name,email,age) VALUES ('name','name@gmail.com',3)"
const insert = "DELETE FROM users WHERE email=NULL"

conection.query(insert,(err,rows) => {
    if(err) throw err
})

conection.query('SELECT * FROM users', (err,rows)=> {
    if(err) throw err
    rows.forEach(row => {
        console.log(`Name: ${row.Name} - Email: ${row.Email} - Age: ${row.Age}`);
        html += `
            <div>
                <h2>${row.Name} (${row.Age})</h2>
                <h3>${row.Email}</h3>
                <hr>
            </div>
        `
    })
})

const text = document.createElement('div')
text.innerHTML = html
console.log(html);

conection.end()