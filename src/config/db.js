const Sequelize = require('sequelize');
require('dotenv').config();




exports.QueryFn = async(database_name) => {

  const sequelize = new Sequelize(database_name, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD , {

    host: process.env.DATABASE_URL,
  
    dialect: 'mysql'
  
  }); 


    return sequelize
}
