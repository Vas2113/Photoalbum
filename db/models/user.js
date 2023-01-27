const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate({ Album }) {
      User.hasMany(Album, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      login: DataTypes.TEXT,
      email: DataTypes.TEXT,
      password: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
