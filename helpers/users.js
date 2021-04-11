const psql = require('../psqlAdapter').psql;  
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
 const sqlCheck = "SELECT * from users WHERE  email = '"+String(json.email).trim() + "' "
const isDupEmail = await checkDupEmail(sqlCheck)
if(!isDupEmail){
    let sql = "INSERT INTO users(  first_name, last_name, user_name, password, email"
        sql += " ,birthday, create_date, update_date, hs_id) "
        sql += " VALUES( '" +json.first_name;
        sql  +=  "','"+json.last_name;
        sql  +=  "','"+json.user_name;
        sql  +=  "','"+json.password;
        sql  +=  "','"+json.email;
        sql  +=  "','"+json.birthday;
        sql  +=  "', current_timestamp";
        sql  +=  ",  current_timestamp ";  
        sql  +=  ","+json.hs_id +")";
        console.log(" sql : ",sql)
            const insert = await psql.none(sql)
                    .then(() => { 
                        ret.status="Success" 
                    })
                    .catch(error => {
                        // error;
                        throw error
                        ret.status="Error"
                    });

} else{
    ret.status ="DuplicateEmailOrUserName"
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










export default users