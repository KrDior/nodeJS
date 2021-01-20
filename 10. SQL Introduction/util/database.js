const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'xzx123654', {
  dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;
