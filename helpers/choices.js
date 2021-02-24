const psql = require('../psqlAdapter').psql;  

const choices ={}

choices.list_all = async(json)=>{
const ret ={}
/*
SELECT choices_id, choices_date, title, good, bad, wish, create_date, update_date, 
choices_pic, user_id, feel_id FROM  choices
*/

let sql  =  "SELECT C.choice_id, C.next_question_id, C.seq, C.des, C.choice_score, Q.question_id"
	sql += " FROM choices C,question Q WHERE C.question_id = Q.question_id"

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

export default choices