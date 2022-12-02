const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodecrudtwo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}