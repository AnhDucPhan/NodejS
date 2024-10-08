
const { Sequelize } = require('sequelize');
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('anhduc', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    // port: 3306
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        // console.error(error.stack);
    }
}
module.exports = connectDB;