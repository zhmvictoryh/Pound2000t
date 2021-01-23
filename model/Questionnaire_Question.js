module.exports = ( sequelize , Sequelize ) => {
    const Questionnaire_Question = sequelize.define(
      'Questionnaire_Question',
      {
 
          qqId: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'qqId' },
          create_date: { type: Sequelize.TIMESTAMP(), allowNull: false, field: 'create_date' }
          

      },
      {
          tableName: 'Questionnaire_Question' 
      }
    );
    
    return Questionnaire_Question;
  }