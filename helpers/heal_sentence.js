const psql = require('../psqlAdapter').psql;  

const heal_sentence ={}

heal_sentence.list_all = async(json)=>{
const ret ={}
/*
SELECT * FROM  heal_sentence
*/

let sql  =  "SELECT hs.heal_sentence from heal_sentence hs order by random() limit 1;"

await psql.manyOrNone(sql)
                .then((data) => {
                 

                console.log(data.length)
                if(data.length >0){ 
                ret.status = 200
                ret.message = "Success"
                ret = data


                }

                })
                .catch(error => {
                // error;
                ret.status = 400
                ret.message = "Error"
                throw error  
                });
                return ret

}

export default heal_sentence

/*await psql.manyOrNone(sql)
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
*/

/* 

const items = ["a", "b", "c"];

function getRandom3 (list) {
    const res = [];
    for (let x = 1; x <= 3; x++) {
        const random = Math.floor(Math.random() * list.length);
        res.push(list[random]);
    }
    return res;
}

function getRandomElements(list {
    return [...list].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 3)
})


*/ 