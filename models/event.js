'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    generateEvent() {
      return `${this.name} by ${this.speakers}`
    }

    static associate(models) {
      // define association here
      Event.belongsTo(models.Promoter, {foreignKey: 'PromoterId'})
      Event.belongsToMany(models.User, {through: models.UserEvent, foreignKey: "EventId"})
    }
  };
  Event.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : 'Please input the title'
        }
      }
    },
    date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty : {
          msg : 'Please input the title'
        }
      }
    },
    location: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : 'Please input the title'
        }
      }
    },
    speakers: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : 'Please input the title'
        }
      }
    },
    PromoterId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty : {
          msg : 'Please input the title'
        }
      }
    },
    status: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'Event',
    hooks: {
      beforeCreate(instance, option){
        // console.log(instance)
        // console.log(option)
        let today = new Date ()
        if (today.valueOf() > instance.date.valueOf()) {
          instance.status = "expired"  
        } else { 
          instance.status = "active"
        }
      }
    }
  });
  return Event;
};