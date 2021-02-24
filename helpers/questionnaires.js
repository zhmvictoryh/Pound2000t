const psql = require('../psqlAdapter').psql;  

const questionnaires ={}

questionnaires.list_all = async(json)=>{
const ret ={}
let sql = "SELECT questionnaire_id, questionnaire, next_questionnaire_id"
	sql += " FROM questionnaires"
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

export default questionnaires