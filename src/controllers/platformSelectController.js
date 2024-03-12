const SuccessHandler = require("../utils/SuccessHandler");
const { QueryFn } = require('../config/db');
const { connectDatabase } = require('../config/authenticator')
const ErrorHandler = require("../utils/ErrorHandler");

exports.selectPlatform = async(req, res) =>{
  
   const user_id = req.params.id;

   const query = `SELECT * FROM \`scs_accounts\` WHERE client_id = ${user_id}`;

   const database = await QueryFn('ecom_main');


   try{

      connectDatabase(database);

    const user = await database.query( query, 
    { type: database.QueryTypes.SELECT }
  );
  
   SuccessHandler(user, 200 , res);

   }
   catch(error){

      ErrorHandler(error, 500 , req, res);

   }
}

exports.getClientDatabase = async(req, res) => {
    
    const client = req.params.client_id 

    SuccessHandler(client, 200, res)




}