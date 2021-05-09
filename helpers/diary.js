const psql = require('../psqlAdapter').psql;  

const diary ={}

diary.list_all = async(json)=>{
const ret ={}
/*
SELECT diary_id, diary_date, title, good, bad, wish, create_date, update_date, 
diary_pic, user_id, feel_id FROM  diary
*/

let sql  =  "SELECT D.diary_id, D.title, D.good, D.bad, D.wish, D.create_date, D.update_date, D.diary_pic" 
sql += ", D.user_id, F.feel_name "
sql += " FROM  diary D LEFT JOIN Feel F ON D.feel_id = F.feel_id" 
sql += " LEFT JOIN users U ON D.user_id = U.user_id WHERE 1=1 "
//sql += " AND d.diary_id = "+json.diary_id + " " 
    
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
diary.create_diary= async(json)=>{
    console.log(json)
const ret ={}

let sql = "INSERT INTO diary(title, good, bad, wish, create_date, update_date, diary_pic, user_id, feel_id)"
    sql += " VALUES ( '"+json.title;
    sql += "','"+json.good;
    sql += "','"+json.bad;
    sql += "','"+json.wish;
    sql += "', current_timestamp";
    sql += " , current_timestamp";
    sql += " ,'"+json.diary_pic;
    sql += "','"+json.user_id;
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

let sql =  "UPDATE diary SET(  title = ''" +json.title; 
    sql += ", good = ''" + json.good; 
    sql += ", bad = ''" + json.bad; 
    sql += ", wish = ''" + json.wish;
    sql += " , update_date = current_timestamp";
    sql += " , create_date = current_timestamp";
    sql += " , diary_pic = ''" +json.diary_pic;
    sql += " , user_id = ''" +json.user_id;
    sql += " , feel_id = ''"+json.feel_id+")";
    ;
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
    sql  +=  "left join users u on d.user_id = u.user_id where u.user_id = '27' " 
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

/*
const insert_mt4_order = async(json)=>{
        let ret = {}
        let   sql = "INSERT INTO mt4_order (   ";
        sql += " ticket_number, mt4_account, broker,  symbol,tp, live_history, master_slave,order_info "; 
        sql += " , open_price, open_time, trade_operation, close_price, close_time, comment "; 
        sql += ", commission, expiration, lots, lot_before_close, lot_closed,  ";
        sql += " magic, profit, sl, swap, create_date, update_date ";
        sql += "  )";
        sql += " VALUES( '" +json.TicketNumber;
        sql  +=  "','"+json.mt4_account; 
        sql  +=  "','"+json.broker; 
        sql  +=  "','"+json.Symbol; 
        sql  +=  "','"+json.Tp; 
        sql  +=  "','"+json.live_history;
        sql  +=  "','"+json.master_slave;
        sql  +=  "','"+json.OrderInfo;
        
        sql  +=  "'," +json.OpenPrice
        sql  +=  ",'" + moment.unix(json.OpenTime).format()
        sql  +=  "','" +json.TradeOperation  
        sql  +=  "'," +json.ClosePrice  
        sql  +=  ",'" +   moment.unix(json.CloseTime).format()
        sql  +=  "','" +json.Comment  
        sql  +=  "'," +json.Commission  
        sql  +=  ",'" +      moment.unix(json.Expiration).format()
        sql  +=  "'," +json.Lots  
        sql  +=  "," +json.LotBeforeClose
        sql  +=  "," +json.LotsClosed
        sql  +=  ",'" +json.Magic
        sql  +=  "'," +json.Profit
        sql  +=  "," +json.SL
        sql  +=  "," +json.Swap
        sql  +=  ", current_timestamp";
        sql  +=  ",  current_timestamp )";  
       // console.log(sql)
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


   } */

