const psql = require('../psqlAdapter').psql;  
import { request, response } from 'express';
import moment from 'moment'  
const users ={}

users.list_all = async(json)=>{
    console.log(json)
const ret ={}
let sql = "SELECT u.user_id, u.first_name, u.last_name, u.user_name, u.password, u.email, u.birthday, u.create_date, u.update_date"
    sql += " , h.hs_id"
    sql += " FROM users u LEFT JOIN heal_sentence h ON u.hs_id = h.hs_id"

await psql.manyOrNone(sql)
                .then((data) => {
                 
                console.log(data.length)
                if(data.length >0){ 
                ret.status=200
                ret.message="Success"
                ret.data = data


                }

                })
                .catch(error => {
                // error;
                ret.status =400
                ret.message="Error"
                throw error  
                });
                return ret

}

users.register = async(json)=>{
    console.log(json)
const ret ={}
/*INSERT INTO users(  first_name, last_name, user_name, password, email
      ,birthday, create_date, update_date, pic_id, hs_id)
 VALUES ('neo', 'swap', 'neo1', 'engineer', 'neo2@neoswap.finance', '2000-02-02', current_timestamp, current_timestamp, 
   1, 1);
 */
let sqlCheck1 = "SELECT * from users WHERE  email = '"+String(json.email).trim() + "' "
let sqlCheck2 = "Select * from users where user_name = '"+String(json.user_name).trim()+"'"
const isDupEmail = await checkDupEmail(sqlCheck1)
const isDupUserName = await checkDupUserName(sqlCheck2)
if(!isDupEmail & !isDupUserName){
    let sql = "INSERT INTO users(  first_name, last_name, user_name, password, email"
        sql += " ,birthday, create_date, update_date) "
        sql += " VALUES( '" +json.first_name;
        sql  +=  "','"+json.last_name;
        sql  +=  "','"+json.user_name;
        sql  +=  "','"+json.password;
        sql  +=  "','"+json.email;
        sql  +=  "','"+json.birthday;
        sql  +=  "', current_timestamp";
        sql  +=  ",  current_timestamp )";  
         
        console.log(" sql : ",sql)
            const insert = await psql.none(sql)
                    .then(() => {  
                        ret.status=200
                        ret.message="Success"
                    })
                    .catch(error => {
                        // error;
                        throw error
                        ret.status=400
                        ret.message="Error"
                    });

} else{
        ret.status=400
        ret.message ="DuplicateEmailOrUserName"
}
    

        
        return ret;
}
 

const checkDupEmail =async(sql)=>{
    let ret = false
    const rows = await psql.manyOrNone(sql)
    .then((data)=>{
        if(data.length>0){
            ret = true
        }
    })
    .catch(error=>{
        throw error
    })
    return ret
}

const checkDupUserName =async(sql)=>{
    let ret = false
    const rows = await psql.manyOrNone(sql)
    .then((data)=>{
        if(data.length>0){
            ret = true
        }
    })
    .catch(error=>{
        throw error
    })
    return ret
}






//login

users.login = async(json)=>{
    console.log(json)
const ret ={}
/*INSERT INTO users(  user_name, password)
 VALUES ('neo1', 'engineer');
 */
let sql = "SELECT  user_id, first_name, last_name, user_name, email, birthday from users  ";
    sql += "  where user_name = '"+String(json.user_name).trim() + "'  AND password = '"+String(json.password).trim()+"'"
 
    await psql.manyOrNone(sql)
                .then((data) => {
                 
                console.log(data.length)
                if(data.length ==1){ 
                ret.status=200
                ret.message="Success"
                ret.data = data
                
                } else {
                    ret.status=400
                ret.message="Fail"
                ret.data = data

                }
     
            })
            
            
            return ret;
        
    
}








users.get_user_name = async(json)=>{
    console.log(json)
const ret ={}

let sql = "Select user_name from users where user_id = " +json.user_id;

 
    await psql.manyOrNone(sql)
                .then((data) => {
                 
                console.log(data.length)
                if(data.length ==1){ 
                ret.status=200
                ret.message="Success"
                ret.data = data
                
                } else {
                    ret.status=400
                ret.message="Error"
                ret.data = data

                }
     
            })
            
            
            return ret;
        
    
}








export default users