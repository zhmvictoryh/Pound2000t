const psql = require('../psqlAdapter').psql;  

const question_type ={}

question_type.list_all = async(json)=>{
let ret =[]
let sql = "SELECT quest_type_id, name FROM question_type"
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

export default question_type