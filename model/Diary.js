module.exports = ( sequelize , Sequelize ) => {
    const Diary = sequelize.define(
      'Diary',
      {
 
          diaryId: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'diaryId' },
          date: { type: Sequelize.DATE(), allowNull: false, field: 'date' },
          title: { type: Sequelize.VARCHAR(45), allowNull: true, field: 'title' },
          good: { type: Sequelize.VARCHAR(100), allowNull: false, field: 'good' },
          bad: { type: Sequelize.VARCHAR(100), allowNull: false, field: 'bad' },
          wish: { type: Sequelize.VARCHAR(100), allowNull: false, field: 'wish' },
          feel: { type: Sequelize.TEXT(), allowNull: false, field: 'feel' },
          createDate: { type: Sequelize.TIMESTAMP(), allowNull: false, field: 'createDate' },
          updateDate: { type: Sequelize.TIMESTAMP(), allowNull: false, field: 'updateDate' },
          diaryPic: { type: Sequelize.VARCHAR(500), allowNull: true, field: 'diaryPic' }


      },
      {
          tableName: 'Diary' 
      }
    );
    
    return Diary;
  }