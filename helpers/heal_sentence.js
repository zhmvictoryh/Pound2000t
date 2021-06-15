const psql = require('../psqlAdapter').psql;  

const heal_sentence ={}

//get
heal_sentence.get_one_sentence = async(json)=>{
const ret ={}

/* SELECT hs_id, heal_sentence FROM heal_sentence; */
    
let today = new Date();
let date1 = new Date(today.getFullYear(),(today.getMonth()+1),today.getDate());
let date2 = new Date(2021,11,4);
let num = ((date1-date2)/86400000);
console.log(num);

let sql = "select heal_sentence from heal_sentence order by random() limit 1;"

console.log(sql)   
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



export default heal_sentence