module.exports = ( sequelize , Sequelize ) => {
    const Question = sequelize.define(
      'Question',
      {
  
          questionId: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'questionId' },
          detail: { type: Sequelize.VARCHAR(200), allowNull: false, field: 'detail' },
          nextQuestionId: { type: Sequelize.INTEGER(), allowNull: false, field: 'nextQuestionId' }
         
          

      },
      {
          tableName: 'Question' 
      }
    );
    
    return Question;
  }