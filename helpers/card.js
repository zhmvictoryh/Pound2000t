const psql = require('../psqlAdapter').psql;  

const card ={}

card.list_all = async(json)=>{
let ret =[]
let sql = "SELECT card_id, card_name, card_description, cheer_up, image_result, min_card_score, max_card_score FROM card"

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

export default card