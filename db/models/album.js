const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate({ User, Photo }) {
      Album.belongsTo(User, { foreignKey: 'user_id' });
      Album.hasMany(Photo, { foreignKey: 'album_id' });
    }
  }
  Album.init(
    {
      title: DataTypes.TEXT,
      body: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Album',
    },
  );
  return Album;
};
