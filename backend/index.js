const express=require('express');
const cors = require('cors')
const app=express();

const mysql=require('mysql2');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'yoga'
});

app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello World");
});


app.get('/api/test',(req,res)=>{

    // const q='select * from test where `name`=?';
    // db.query(
    //     'SELECT * FROM `test` WHERE `name` = ?',
    //     ['sai'],
    //     function(err, results) {
    //       console.log(results);
    //     }
    // );
    
    const q='select * from test';
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    } );
});

app.post("/api/book",(req,res)=>{
    const q="insert into test (`id`,`name`) values (?)"
    const values=[
        req.body.id,
        req.body.name,
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("booking done successfully");
    });
});


app.post("/api/userdetails",(req,res)=>{
    const q="insert into user_details(`Email`,`Name`,`Age`,`phone_no`,`password`) values(?)"

    const values=[
        req.body.Email,
        req.body.Name,
        req.body.Age,   
        req.body.phone_no,
        req.body.password
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("booking done successfully");
    });
})



app.listen(8888,()=>console.log('Listening on Port 8888'));

