const psql = require('../psqlAdapter').psql;  

const users ={}

users.list_all = async(json)=>{
let ret =[]
let sql = "SELECT u.user_id, u.first_name, u.last_name, u.user_name, u.password, u.email, u.birthday, u.create_date, u.update_date"
    sql += " ,p.pic_id, h.hs_id"
    sql += " FROM users u LEFT JOIN profile_picture p ON u.pic_id = p.pic_id"
    sql += " LEFT JOIN heal_sentence h ON u.hs_id = h.hs_id"

await psql.manyOrNone(sql)
                .then((data) => {
                 

                console.log(data.length)
                if(data.length >0){ 
                ret = data


                }

                })
                .catch(error => {
                // error;
                throw error  
                });
                return ret

}

export default users