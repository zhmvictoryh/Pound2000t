const psql = require('../psqlAdapter').psql;  

const feel ={}

feel.list_all = async(json)=>{
const ret ={}
let sql = "SELECT feel_id, feel_name FROM feel"
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

export default feel