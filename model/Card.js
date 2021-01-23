module.exports = ( sequelize , Sequelize ) => {
    const Card = sequelize.define(
      'Card',
      {
 
          cardId: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'cardId' },
          cardName: { type: Sequelize.TEXT(), allowNull: false, field: 'cardName' },
          cardDescription: { type: Sequelize.VARCHAR(700), allowNull: false, field: 'cardDescription' },
          cheerUp: { type: Sequelize.VARCHAR(700), allowNull: false, field: 'cheerUp' },
          imageResult: { type: Sequelize.VARCHAR(500), allowNull: false, field: 'imageResult' },
          minCardScore: { type: Sequelize.NUMERIC(), allowNull: false, field: 'minCardScore' },
          maxCardScore: { type: Sequelize.NUMERIC(), allowNull: false, field: 'maxCardScore' }
      },
      {
          tableName: 'Card' 
      }
    );
    
    return Card;
  }