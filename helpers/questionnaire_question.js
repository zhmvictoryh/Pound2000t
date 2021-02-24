const psql = require('../psqlAdapter').psql;  

const questionnaire_question ={}

questionnaire_question.list_all = async(json)=>{
const ret ={}
/*let sql = "SELECT q_qn.qq_id, qn.questionnaire_id, q.question_id, q_qn.create_date"
	sql += " FROM questionnaire_question q_qn LEFT JOIN questionnaires qn ON q_qn.questionnaire_id = qn.questionnaire_id"
	sql += " LEFT JOIN question q ON q_qn.question_id = q.question_id"*/

 let sql = "SELECT qq_id, questionnaire_id, question_id, create_date"
	sql += " FROM questionnaire_question"
	
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

export default questionnaire_question