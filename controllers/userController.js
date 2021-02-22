const User = require('../models/User');
const db = require('../psqlAdapter');

exports.addUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        const { first_name, last_name, birthday, user_name, email, password, pic_id } = data;
        const user = new User({ first_name, last_name, birthday, user_name, email, password, pic_id });
        user.createUser().then((e) => {
            resolve(e)

        }).catch((e) => {
            reject(e)
        });

    })


};

exports.getUserByuser_name = async (id) => {
    console.log("test123")
    return new Promise(async (resolve, reject) => {


        try {
        console.log("test login")
            const { rows } = await db.query(
                `SELECT * FROM users WHERE user_id = $1`,
                [id]
            
            );
            resolve(rows);
        } catch (error) {
            console.log("test22")
            reject(error)
        }
    })


}

exports.getUserById = async (id) => {
    return new Promise(async (resolve, reject) => {


        try {
            const { rows } = await db.query(
                `SELECT * FROM users WHERE user_id = $1`,
                [id]
            
            );
            resolve(rows);
        } catch (error) {
            reject(error)
        }
    })

}

