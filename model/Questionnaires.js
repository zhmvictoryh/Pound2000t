module.exports = ( sequelize , Sequelize ) => {
    const Questionnaires = sequelize.define(
      'Questionnaires',
      {
 
          questionnaireId: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'questionnaireId' },
          questionnaire: { type: Sequelize.VARCHAR(100), allowNull: false, field: 'questionnaire' },
          nextQuestionnaireId: { type: Sequelize.INTEGER(), allowNull: true, field: 'nextQuestionnaireId' }
         
      },
      {
          tableName: 'Questionnaires' 
      }
    );
    
    return Questionnaires;
  }