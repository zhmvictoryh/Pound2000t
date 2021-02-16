const psql = require('../psqlAdapter').psql;  

const feel ={}

feel.list_all = async(json)=>{
let ret =[]
let sql = "SELECT feel_id, feel_name FROM feel"
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

export default feel