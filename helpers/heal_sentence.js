const psql = require('../psqlAdapter').psql;  

const heal_sentence ={}

heal_sentence.list_all = async(json)=>{
let ret =[]
/*
SELECT heal_sentence_id, heal_sentence_date, title, good, bad, wish, create_date, update_date, 
heal_sentence_pic, user_id, feel_id FROM  heal_sentence
*/

let sql  =  "SELECT hs_id, heal_sentence FROM heal_sentence"

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

export default heal_sentence