'use strict';

const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(7)

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Event, {through: models.UserEvent, foreignKey: "UserId"})
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(instance => {
    let encriptPass = bcrypt.hashSync(instance.password, salt)
    instance.password = encriptPass
  })

  return User;
};