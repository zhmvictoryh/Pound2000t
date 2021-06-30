require('dotenv').config()
//export const PG_URL = "postgresql://ibearyou:ibearyou@localhost:5999/ibearyou_db"; // run manual
 export const PG_URL = process.env.DATABASE_URL //run container