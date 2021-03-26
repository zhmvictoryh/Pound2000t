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


// put = update 
// update ใน sql ไม่ได้ใช้ insert
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
/*UPDATE alarm
	SET alarm_id='2', alarm_name='lyla', alarm_time='05:06:07', sound_id='1', user_id='1';
 */

//แก้เป็น query edit แน้วว
let sql =  "UPDATE alarm SET(  alarm_name = ''" +json.alarm_name; 
    sql += ", alarm_time = ''" + json.alarm_time; 
    sql += ", sound_id = ''" + json.sound_id; 
    sql += ", user_id = ''" + json.user_id + ")";
    console.log(" sql : ",sql)
        const update = await psql.none(sql)
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

//delete
alarm.delete = async(json)=>{
    console.log(json)
const ret ={}
/*
    DELETE FROM "alarm" WHERE alarm_id = '1';
*/

let sql =  "DELETE FROM alarm where alarm_id = " + json.alarm_id;
    console.log(" sql : ",sql)
        const remove = await psql.none(sql)
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
