const psql = require('../psqlAdapter').psql;  

const heal_sentence ={}

heal_sentence.list_all = async(json)=>{
let ret =[]
/*
SELECT heal_sentence_id, heal_sentence_date, title, good, bad, wish, create_date, update_date, 
heal_sentence_pic, user_id, feel_id FROM  heal_sentence
*/

let sql  =  "SELECT hs_id, heal_sentence FROM heal_sentence"

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

export default heal_sentence