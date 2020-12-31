const {Pool,Client} = require('pg')
const connectionString = 'postgressql://postgres:1807@localhost:5433/IBearYou'

const client = new Client({
   connectionString:connectionString
})

client.connect();

client.query('Select * from ' , (err,res)=>{
    
 console.log(err,res)
    client.end() ;
})
