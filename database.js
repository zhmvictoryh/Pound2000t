const {Pool,Client} = require('pg')
const connectionString = 'postgresql://ibearyou:ibearyou@localhost:5999/ibearyou_db'

const client = new Client({
   connectionString:connectionString
})

client.connect();

client.query('Select * from "Card"' , (err,res)=>{
    
 console.log(err,res)
    client.end() ;
})
