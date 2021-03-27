const Sequelize = require("sequelize");

/* Connection with database MySQL */
const sequelize = new Sequelize("postapp", "root", "root", {
    host:"127.0.0.1",
    dialect:"mysql",
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}