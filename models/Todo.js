const Sequelize = require('sequelize')

module.exports = function(sequelize, DataTypes) {
    class Todo extends Sequelize.Model { }
    Todo.init(
      {
        task: {
          type: DataTypes.STRING,
          allowNull: false
        },
        done: {
          defaultValue: false,
          type: DataTypes.BOOLEAN
        }
      },
      { sequelize, modelName: 'Todo' }
    );
    Todo.sync();
    return Todo;
  };

//   sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });