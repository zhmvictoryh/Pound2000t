const psql = require('../psqlAdapter').psql;  

const question ={}

question.list_all = async(json)=>{
const ret ={}
/*let sql = "SELECT Q.question_id, Q.detail, Q.next_question_id, QT.quest_type_id"
	sql += " FROM question Q, question_type QT WHERE Q.quest_type_id = QT.quest_type_id"*/

    let sql = "SELECT q.question_id, q.detail, c.seq, c.des, c.next_question_id, q.quest_type_id, q.next_question_id"
    sql += " FROM question q" 
    sql += " LEFT JOIN choices c" 
    sql += " ON  q.question_id = c.question_id"
	
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

export default question