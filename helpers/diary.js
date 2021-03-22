const psql = require('../psqlAdapter').psql;  

const diary ={}

diary.list_all = async(json)=>{
const ret ={}
/*
SELECT diary_id, diary_date, title, good, bad, wish, create_date, update_date, 
diary_pic, user_id, feel_id FROM  diary
*/

let sql  =  "SELECT D.diary_id, D.diary_date, D.title, D.good, D.bad, D.wish, D.create_date, D.update_date, D.diary_pic" 
sql += ", D.user_id, F.feel_name "
sql += " FROM  diary D LEFT JOIN Feel F ON D.feel_id = F.feel_id" 
sql += " LEFT JOIN users U ON D.user_id = U.user_id" 
    
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

let sql = "INSERT INTO diary(diary_date, title, good, bad, wish, create_date, update_date, diary_pic, user_id, feel_id)"
	sql += " VALUES( '" +json.diary_date;
    sql += "','"+json.title;
    sql += "','"+json.good;
    sql += "','"+json.bad;
    sql += "','"+json.wish;
    sql += "', current_timestamp";
    sql += ",  current_timestamp ";
    sql += " ,'"+json.pic;
    sql += "','"+json.user_id;
    sql += "','"+json.feel_id+")";
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


// picture --> url?
// type date?
// กรณีดึงจากตารางอื่น เขียนงายยยย

//put
diary.edit_diary= async(json)=>{
    console.log(json)
const ret ={}

let sql = "INSERT INTO diary(diary_date, title, good, bad, wish, update_date, diary_pic, user_id, feel_id)"
	sql += " VALUES( '" +json.diary_date;
    sql += "','"+json.title;
    sql += "','"+json.good;
    sql += "','"+json.bad;
    sql += "','"+json.wish;
    sql += "', current_timestamp";
    sql += " ,'"+json.pic;
    sql += "','"+json.user_id;
    sql += "','"+json.feel_id+")";
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

