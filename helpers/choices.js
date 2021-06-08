const psql = require('../psqlAdapter').psql;  

const choices ={}

choices.list_all = async(json)=>{
const ret ={}
/*
SELECT choices_id, choices_date, title, good, bad, wish, create_date, update_date, 
choices_pic, user_id, feel_id FROM  choices
*/

let sql  =  "SELECT C.choice_id, C.next_question_id, C.seq, C.des, C.choice_score, Q.question_id"
	sql += " FROM choices C,question Q WHERE C.question_id = Q.question_id"

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


export default choices