const psql = require('../psqlAdapter').psql;  

const heal_sentence ={}

heal_sentence.list_all = async(json)=>{
const ret ={} 

/*
SELECT hs.hs_id, hs.heal_sentence FROM heal_sentence hs;
*/

//get
let sql  =  "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 1;" 
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 2;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 3;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 4;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 5;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 6;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 7;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 8;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 9;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 10;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 11;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 12;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 13;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 14;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 15;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 16;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 17;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 18;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 19;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 20;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 21;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 22;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 23;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 24;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 25;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 26;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 27;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 28;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 29;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 30;"
sql += "SELECT hs.heal_sentence FROM heal_sentence hs WHERE hs_id = 31;"


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

console.log(getRandom3(item));
*/


/*
function getRandomElements(list {
    return [...list].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 3)
})
*/




