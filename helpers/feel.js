const psql = require('../psqlAdapter').psql;  

const feel ={}

feel.list_all = async(json)=>{
const ret ={}
let sql = "SELECT feel_id, feel_name FROM feel"
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

//feel_id = 1
feel.list_feel1 = async(json)=>{
    const ret ={}
    let sql = "SELECT feel_name FROM feel WHERE feel_id = 1"
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

//feel_id = 2
feel.list_feel2 = async(json)=>{
    const ret ={}
    let sql = "SELECT feel_name FROM feel WHERE feel_id = 2"
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


//feel_id = 3
feel.list_feel3 = async(json)=>{
    const ret ={}
    let sql = "SELECT feel_name FROM feel WHERE feel_id = 3"
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

//feel_id = 4
feel.list_feel4 = async(json)=>{
    const ret ={}
    let sql = "SELECT feel_name FROM feel WHERE feel_id = 4"
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


//feel_id = 5
feel.list_feel5 = async(json)=>{
    const ret ={}
    let sql = "SELECT feel_name FROM feel WHERE feel_id = 5"
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


    
export default feel