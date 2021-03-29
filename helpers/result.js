const psql = require('../psqlAdapter').psql;  

const result ={}

result.list_all = async(json)=>{
const ret ={}

let sql = "SELECT r.result_id, r.user_prompt, r.create_date, qn.questionnaire_id, u.user_id, c.card_id"
	sql += " FROM result r LEFT JOIN questionnaires qn ON r.questionnaire_id = qn.questionnaire_id"
	sql += " LEFT JOIN users u ON r.user_id = u.user_id"
	sql += " LEFT JOIN card c ON r.card_id = c.card_id"
	
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

//post
diary.result= async(json)=>{
    console.log(json)
const ret ={}

let sql = "INSERT INTO result(user_prompt, create_date, questionnaire_id, user_id, card_id)"
	sql += " VALUES( '" +user_prompt;
    sql += "', current_timestamp";
    sql += " ,'"+json.questionnaire_id
    sql += "','"+json.user_id;
    sql += "','"+json.card_id +")";
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

        
        return ret;
}


export default result