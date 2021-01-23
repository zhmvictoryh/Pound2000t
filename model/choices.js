module.exports = ( sequelize , Sequelize ) => {
    const choices = sequelize.define(
      'choices',
      {

          choiceId: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'choiceId' },
          nextQuestionId: { type: Sequelize.INTEGER(), allowNull: false, field: 'nextQuestionId' },
          seq: { type: Sequelize.VARCHAR(200), allowNull: false, field: 'seq' },
          desc: { type: Sequelize.VARCHAR(400), allowNull: false, field: 'desc' },
          choiceScore: { type: Sequelize.NUMERIC(), allowNull: false, field: 'choiceScore' },


      },
      {
          tableName: 'choices' 
      }
    );
    
    return choices;
  }