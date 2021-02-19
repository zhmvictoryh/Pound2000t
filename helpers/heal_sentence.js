const psql = require('../psqlAdapter').psql;  

const heal_sentence ={}

heal_sentence.list_all = async(json)=>{
let ret =[]
/*
SELECT * FROM  heal_sentence
*/

let sql  =  "SELECT hs.heal_sentence from heal_sentence hs order by random() limit 1;"

await psql.manyOrNone(sql)
                .then((data) => {
                 

                console.log(data)
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