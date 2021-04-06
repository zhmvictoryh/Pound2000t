const psql = require('../psqlAdapter').psql;  

const sound ={}

sound.list_all = async(json)=>{
const ret ={}
/*
    SELECT sound_id, sound_name, sound_link FROM sound;
*/

//GET
let sql  =  "SELECT sound_id, sound_name, sound_link FROM sound;"
    
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

export default sound;