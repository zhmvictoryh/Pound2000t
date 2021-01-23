module.exports = ( sequelize , Sequelize ) => {
    const Profile_photo = sequelize.define(
      'Profile_photo',
      {
 
          photoId: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'photoId' },
          photoName: { type: Sequelize.TEXT(), allowNull: false, field: 'photoName' },
          photoLink: { type: Sequelize.VARCHAR(500), allowNull: false, field: 'photoLink' }
         

      },
      {
          tableName: 'Profile_photo' 
      }
    );
    
    return Profile_photo;
  }