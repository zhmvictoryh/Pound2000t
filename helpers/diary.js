const psql = require('../psqlAdapter').psql;  

const diary ={}

diary.list_all = async(json)=>{
let ret =[]
let sql = "SELECT * from diary"
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

export default diary