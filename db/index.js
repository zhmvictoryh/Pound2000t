const { Sequelize } = require('sequelize');

//อันนี้เป็นส่วนที่ใช้ในการบอก Sequelize ว่าเราจะ connect ไปที่ไหน
const sequelize = new Sequelize(
  'ibearyou_db', // นี่เป็นชื่อ DB ของเรานะครับ
  'ibearyou', // user ที่ใช้สำหรับการเข้าไปยัง db
  'ibearyou', // password 
  {
  host: 'localhost', // host ของ db ที่เราสร้างเอาไว้
  dialect: 'postgres', // 'mysql' | 'mariadb' | 'postgres' | 'mssql'   พวกนี้ใช่ก็ใช้ได้นะจ๊ะ
  define: {
    timestamps: false //ส่วนตรงนี้ก็เป็นการตั้งค่าเพิ่มเติม
  }
});

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

//ส่วนนี้เป็นการ import model ของ table ใน database เข้ามาเพื่อตั้งต่า relation นะครับ
  db.User = require("./model/User")( sequelize , Sequelize );
  db.Profile_photo = require("./model/Profile_photo")( sequelize , Sequelize );
  db.Diary = require("./model/Diary")( sequelize , Sequelize );
  db.Questionnaires = require("./model/Questionnaires")( sequelize , Sequelize );
  db.Question = require("./model/Question")( sequelize , Sequelize );
  db.QuestionType = require("./model/QuestionType")( sequelize , Sequelize );
  db.Questionnaire_Question = require("./model/Questionnaire_Question")( sequelize , Sequelize );
  db.choices = require("./model/choices")( sequelize , Sequelize );
  db.Result = require("./model/Result")( sequelize , Sequelize );
  db.Card = require("./model/Card")( sequelize , Sequelize );

  //ส่วนนี้เป็นการตั้งต่า relation นะครับ โดยเป็นการบอกว่าใน 1 team มีได้หลาย player ง่ายๆ ก็คือ relation แบบ 1:M 
  db.User.hasMany(
    db.Diary,
    {
        foreignKey: { name: 'userId', field: 'userId' }, //name ตรงสำคัญพยายามตั่งให้เป็นชื่อเดียวกับ FK ใน table ที่นำไปใช้นะครับ
    },
    db.Result,
    {
        foreignKey: { name: 'userId', field: 'userId' },
    }
  );

  db.Profile_photo.hasOne(
      db.User,
      {
        foreignKey: { name: 'photoId', field: 'photoId' }, 
      }
  );

  db.Questionnaires.hasMany(
    db.Questionnaire_Question,
    {
      foreignKey: { name: 'questionnaireId', field: 'questionnaireId' }, 
    },
    db.Result,
    {
      foreignKey: { name: 'questionnaireId', field: 'questionnaireId' }, 
    }
  );

  db.Question.hasMany(
    db.Questionnaire_Question,
    {
        foreignKey: { name: 'questionId', field: 'questionId'},
    },

   db.choices,
   {
        foreignKey: { name: 'questionId', field: 'questionId'},
   }
  );

  db.QuestionType.hasMany(
      db.Question,
      {
          foreignKey: { name: 'questTypeId', field: 'questTypeId'},
      }
  );

  db.Card.hasOne(
      db.Result,
      {
          foreignKey: { name: 'cardId', field: 'cardId'},
      }
  );


//ส่วนนี้เป็นการตั้ง relation แบบกลับกันกับด้านบน จริงแล้วเราไม่ตั้งก็ได้นะครับแต่ผมแนะนำให้ตั้งเอาไว้ เพราะเวลาที่เราไม่ได้ใส่ 
//line นี้จะทำให้เราสามารถใช้  team ในการหา player ได้อย่างเดียวและไม่สามารถใช้ player หา team ได้
  db.Diary.belongsTo(db.User, { foreignKey: 'userId' });
  db.Result.belongsTo(db.User, { foreignKey: 'userId'});
  db.User.belongsTo(db.Profile_photo, { foreignKey: 'photoId'});
  db.Questionnaire_Question.belongsTo(db.Questionnaires, { foreignKey: 'questionnaireId'});
  db.Result.belongsTo(db.Questionnaires, { foreignKey: 'questionnaireId'});
  db.Questionnaire_Question.belongsTo(db.Question, { foreignKey: 'questionId'});
  db.choices.belongsTo(db.Question, { foreignKey: 'questionId'});
  db.Question.belongsTo(db.QuestionType, { foreignKey: 'questTypeId'});
  db.Result.belongsTo(db.Card, { foreignKey: 'cardId'});
 
 
  module.exports = db;