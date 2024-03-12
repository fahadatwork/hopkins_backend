
const { QueryFn } = require('../config/db');
const { connectDatabase } = require('../config/authenticator');
const SuccessHandler = require('../utils/SuccessHandler');
const ErrorHandler = require('../utils/ErrorHandler');
const { Paginate } = require('../utils/paginator')


exports.ecomCategories = async(req, res) =>{

   const page = Number(req.query.page)
   const limit = Number(req.query.limit)
  
 
    const query = `SELECT * FROM scs_categories`;
 
    const database = await QueryFn('ecom_account_109');
 
 
    try{
 
       connectDatabase(database);
 
     const categories = await database.query( query, 
     { type: database.QueryTypes.SELECT }
   );

     const paginated_categories = Paginate(categories, page, limit);

;
   
    SuccessHandler(paginated_categories, 200 , res);
 
    }
    catch(error){
 
       ErrorHandler(error, 500 , req, res);
 
    }
 }