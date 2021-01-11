module.exports = ( sequelize , Sequelize ) => {
    const Result = sequelize.define(
      'Result',
      {

          resultId: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'resultId' },
          userPrompt: { type: Sequelize.VARCHAR(500), allowNull: true, field: 'userPrompt' },
          createDate: { type: Sequelize.TIMESTAMP(), allowNull: false, field: 'createDate' }
         
      },
      {
          tableName: 'Result' 
      }
    );
    
    return Result;
  }