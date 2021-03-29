const psql = require('../psqlAdapter').psql;  

const heal_sentence = {}

    let today = new Date();
    let date1 = new Date(today.getFullYear(),(today.getMonth()+1),today.getDate());
    let date2 = new Date(2021,11,6);
    let num = ((date1-date2)/86400000);
    console.log(num);

    let count = "SELECT COUNT(heal_sentence) FROM heal_sentence;";
    let getMod = (num%count);
    console.log(getMod);
    
    let sql = "SELECT heal_sentence FROM heal_sentence where hs_id = " + getMod; 
    console.log(sql);

export default heal_sentence