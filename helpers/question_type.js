const psql = require('../psqlAdapter').psql;  

const question_type ={}

question_type.list_all = async(json)=>{
const ret ={}
let sql = "SELECT quest_type_id, name FROM question_type"
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

export default question_type