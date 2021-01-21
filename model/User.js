module.exports = ( sequelize , Sequelize ) => {
    const User = sequelize.define(
      'User',
      {
  // ด้านล่างเป็นการตั้งค่า attribute ของ table นะครับ
  // ชื่อตัวแปรที่เราใช้เรียกแทน: { type: Sequelize.STRING(50), allowNull: false, field: 'ชื่อของ attribute' } 
  // สามารถใส่ option เพิ่มเติมได้นะครับเช่น primaryKey: true อะไรแบบนี้ 
  // แล้วก็อันนี้สำคัญ ** ไม่จำเป็นต้องสร้าง attribute ที่เป็น FK จาก table อื่นนะครับ เพราะเราจะไปกำหนด relation กันใน file index
          userId: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'userId' },
          firstName: { type: Sequelize.TEXT(), allowNull: false, field: 'firstName' },
          lastName: { type: Sequelize.TEXT(), allowNull: false, field: 'lastName' },
          password: { type: Sequelize.VARCHAR(45), allowNull: false, field: 'password' },
          email: { type: Sequelize.VARCHAR(45), uniqueKey: true, field: 'email' },
          birthday: { type: Sequelize.DATE(), allowNull: false, field: 'birthday' },
          createDate: { type: Sequelize.TIMESTAMP(), allowNull: false, field: 'createDate' },
          updateDate: { type: Sequelize.TIMESTAMP(), allowNull: false, field: 'updateDate' }

      },
      {
          tableName: 'User' 
      }
    );
    
    return User;
  }