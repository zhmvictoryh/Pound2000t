const psql = require('../psqlAdapter').psql;  

const result ={}

result.list_all = async(json)=>{
let ret =[]

let sql = "SELECT r.result_id, r.user_prompt, r.create_date, qn.questionnaire_id, u.user_id, c.card_id"
	sql += " FROM result r LEFT JOIN questionnaires qn ON r.questionnaire_id = qn.questionnaire_id"
	sql += " LEFT JOIN users u ON r.user_id = u.user_id"
	sql += " LEFT JOIN card c ON r.card_id = c.card_id"
	
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

export default result