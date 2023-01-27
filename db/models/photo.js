const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({ Album }) {
      Photo.belongsTo(Album, { foreignKey: 'album_id' });
    }
  }
  Photo.init(
    {
      photoname: DataTypes.TEXT,
      photo: DataTypes.TEXT,
      album_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Albums',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Photo',
    },
  );
  return Photo;
};
