const psql = require('../psqlAdapter').psql;  

const alarm ={}

alarm.list_all = async(json)=>{
const ret ={}
/*
SELECT a.alarm_id, a.alarm_name, a.alarm_time, a.sound_id, a.user_id
FROM  alarm a;
*/

//get
let sql  =  "SELECT a.alarm_id, a.alarm_name, a.alarm_time"
sql += ", s.sound_id, u.user_id "
sql += " FROM  alarm a LEFT JOIN sound s ON a.sound_id = s.sound_id" 
sql += " LEFT JOIN users u ON a.user_id = u.user_id" 
    
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

//post
alarm.add = async(json)=>{
    console.log(json)
const ret ={}
/*INSERT INTO alarm(  alarm_name, alarm_time, sound_id, user_id)
	VALUES ('กินยาแก้ปวด', '2021-11-02 03:25:01', '1', '1');
 */

let sql = "INSERT INTO alarm(  alarm_name, alarm_time, sound_id, user_id)"
    sql += " VALUES( '" +json.alarm_name;
    sql  +=  "','"+json.alarm_time;
    sql  +=  "','"+json.sound_id;
    sql  +=  "','"+json.user_id +")";
    console.log(" sql : ",sql)
        const insert = await psql.none(sql)
                .then(() => { 
                    ret.status="Success" 
                })
                .catch(error => {
                    // error;
                    throw error
                    ret.status="Error"
                });

        
        return ret;
}

//put
alarm.edit = async(json)=>{
    console.log(json)
const ret ={}
/*INSERT INTO alarm(  alarm_name, alarm_time, sound_id, user_id)
	VALUES ('กินยาแก้ปวด', '2021-11-02 04:25:01', '1', '1');
 */

let sql = "INSERT INTO alarm(  alarm_name, alarm_time, sound_id, user_id)"
    sql += " VALUES( '" +json.alarm_name;
    sql  +=  "','"+json.alarm_time;
    sql  +=  "','"+json.sound_id;
    sql  +=  "','"+json.user_id +")";
    console.log(" sql : ",sql)
        const insert = await psql.none(sql)
                .then(() => { 
                    ret.status="Success" 
                })
                .catch(error => {
                    // error;
                    throw error
                    ret.status="Error"
                });

        
        return ret;
}
export default alarm
