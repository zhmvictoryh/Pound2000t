const db = require('../psqlAdapter');
function User ({
  first_name,
  last_name,
  birthday,
  user_name, 
  email, 
  password, 
  pic_id
}) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.birthday = birthday;
    this.user_name = user_name;
    this.email = email;
    this.password = password;
    this.pic_id = pic_id;
};
// add a createUser method to the prototype
User.prototype.createUser = async function() {
    try {
        const { rows } = await db.query(
            `INSERT INTO users(first_name,last_name,birthday,user_name, email, password,pic_id) 
            VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [this.first_name,this.last_name,this.birthday,this.user_name, this.email, this.password,this.pic_id]
        );
        return rows; 
    } catch (error) {
        throw error;
    }
};



module.exports = User;

