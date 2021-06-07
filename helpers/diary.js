const psql = require('../psqlAdapter').psql;  

const diary ={}

diary.list_all = async(json)=>{
const ret ={}
/*
SELECT diary_id, diary_date, title, good, bad, wish, create_date, update_date, 
diary_pic, user_id, feel_id FROM  diary
*/

let sql  =  "SELECT D.diary_id, D.title, D.good, D.bad, D.wish, D.create_date, D.update_date " 
sql += ", D.user_id, F.feel_name "
sql += " FROM  diary D LEFT JOIN Feel F ON D.feel_id = F.feel_id" 
sql += " LEFT JOIN users U ON D.user_id = U.user_id WHERE u.user_id = " +json.user_id;
sql += " AND d.diary_id = "+json.diary_id + " " 
    
await psql.manyOrNone(sql)
                .then((data) => {
                 

                console.log(data.length)
                if(data.length > 0){ 
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
diary.create_diary= async(json)=>{
    console.log(json)
const ret ={}

let sql = "INSERT INTO diary(title, good, bad, wish, create_date, user_id, feel_id)"
    sql += " VALUES ( '"+json.title;
    sql += "','"+json.good;
    sql += "','"+json.bad;
    sql += "','"+json.wish;
    sql += "', current_timestamp";
    sql += ",'"+json.user_id;
    sql += "','"+json.feel_id+"')";
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
diary.edit_diary = async(json)=>{
    console.log(json)
const ret ={}


    let sql  = "UPDATE diary SET title='"+json.title+"'";
        sql += ", good='" +json.good+"'";
        sql += ", bad='"+json.bad+ "'";
        sql += ", wish='"+json.wish+ "'";
	    sql += ", user_id = '" +json.user_id+"'" ;
	    sql += " WHERE diary_id ='" +json.diary_id+"'";

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


//Home page

//Get good only
diary.list_allgood = async(json)=>{
    const ret ={}
    console.log(json)
    /*
    SELECT d.good, d.update_date FROM diary d LEFT JOIN users u ON d.user_id = u.user_id where 1=1
    */
    
    let sql   =  "select  d.update_date, d.good"
        sql  +=  " from diary d " 
        sql  +=  "left join users u on d.user_id = u.user_id where u.user_id =" +json.user_id; 
        sql  +=  " group by d.good,d.update_date"
        sql  +=  " order by d.update_date desc;" 
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

//Get bad only
diary.list_allbad = async(json)=>{
    const ret ={}
    /*
    SELECT d.bad, d.update_date FROM diary d LEFT JOIN users u ON d.user_id = u.user_id where 1=1
    */
    // แก้ syntax ไม่เอา hard code
    let sql   =  "select  d.update_date, d.bad"
        sql  +=  " from diary d " 
        sql  +=  "left join users u on d.user_id = u.user_id where u.user_id =" +json.user_id; 
        sql  +=  " group by d.bad,d.update_date"
        sql  +=  " order by d.update_date desc;" 
        
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

    diary.list_allwish = async(json)=>{
        const ret ={}
        /*
        SELECT d.wish, d.update_date FROM diary d LEFT JOIN users u ON d.user_id = u.user_id where 1=1
        */
        
        let sql   =  "select  d.update_date, d.wish"
            sql  +=  " from diary d " 
            sql  +=  "left join users u on d.user_id = u.user_id where u.user_id =" +json.user_id; 
            sql  +=  " group by d.wish,d.update_date"
            sql  +=  " order by d.update_date desc;" 
            
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

export default diary


