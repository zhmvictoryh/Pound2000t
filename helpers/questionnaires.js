const psql = require('../psqlAdapter').psql;  

const questionnaires ={}

questionnaires.list_all = async(json)=>{
let ret =[]
let sql = "SELECT questionnaire_id, questionnaire, next_questionnaire_id"
	sql += " FROM questionnaires"
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

export default questionnaires