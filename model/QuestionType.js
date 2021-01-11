module.exports = ( sequelize , Sequelize ) => {
    const QuestionType = sequelize.define(
      'QuestionType',
      {
 
          questTypeId: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'questTypeId' },
          name: { type: Sequelize.VARCHAR(200), allowNull: false, field: 'name' }
          

      },
      {
          tableName: 'QuestionType' 
      }
    );
    
    return QuestionType;
  }