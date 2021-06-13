const psql = require('../psqlAdapter').psql;

const feel = {}

feel.list_allfeel = async (json) => {
    const ret = {}
    let sql = " select feel_id, feel_name from feel"
    sql += " order by feel_id; "
    await psql.manyOrNone(sql)
        .then((data) => {


            console.log(data.length)
            if (data.length > 0) {
                ret.status = 200
                ret.message = "Success"
                ret.data = data


            }

        })
        .catch(error => {
            // error;
            ret.status = 400
            ret.message = "Error"
            throw error
        });
    return ret

}

feel.very_good = async (json) => {
    const ret = {}
    let sql = " select feel_id, feel_name from feel"
    sql += " where feel_id = " + json.feel_id;
    await psql.manyOrNone(sql)
        .then((data) => {


            console.log(data.length)
            if (data.length > 0) {
                ret.status = 200
                ret.message = "Success"
                ret.data = data


            }

        })
        .catch(error => {
            // error;
            ret.status = 400
            ret.message = "Error"
            throw error
        });
    return ret

}

feel.good = async (json) => {
    const ret = {}
    let sql = " select feel_id, feel_name from feel"
    sql += " where feel_id = " + json.feel_id;
    await psql.manyOrNone(sql)
        .then((data) => {


            console.log(data.length)
            if (data.length > 0) {
                ret.status = 200
                ret.message = "Success"
                ret.data = data


            }

        })
        .catch(error => {
            // error;
            ret.status = 400
            ret.message = "Error"
            throw error
        });
    return ret

}

feel.soso = async (json) => {
    const ret = {}
    let sql = " select feel_id, feel_name from feel"
    sql += " where feel_id = " + json.feel_id;
    await psql.manyOrNone(sql)
        .then((data) => {


            console.log(data.length)
            if (data.length > 0) {
                ret.status = 200
                ret.message = "Success"
                ret.data = data


            }

        })
        .catch(error => {
            // error;
            ret.status = 400
            ret.message = "Error"
            throw error
        });
    return ret

}

feel.bad = async (json) => {
    const ret = {}
    let sql = " select feel_id, feel_name from feel"
    sql += " where feel_id = " + json.feel_id;
    await psql.manyOrNone(sql)
        .then((data) => {


            console.log(data.length)
            if (data.length > 0) {
                ret.status = 200
                ret.message = "Success"
                ret.data = data


            }

        })
        .catch(error => {
            // error;
            ret.status = 400
            ret.message = "Error"
            throw error
        });
    return ret

}

feel.moody = async (json) => {
    const ret = {}
    let sql = " select feel_id, feel_name from feel"
    sql += " where feel_id = " + json.feel_id;
    await psql.manyOrNone(sql)
        .then((data) => {


            console.log(data.length)
            if (data.length > 0) {
                ret.status = 200
                ret.message = "Success"
                ret.data = data


            }

        })
        .catch(error => {
            // error;
            ret.status = 400
            ret.message = "Error"
            throw error
        });
    return ret

}

export default feel