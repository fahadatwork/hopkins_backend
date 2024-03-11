
exports.connectDatabase = async(database) => {

  try {
    await database.authenticate();
    console.log(`Connected to ${process.env.DATABASE_URL}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  finally{

     database.close().then( ()=>{

        console.log('database connection is closed now');
     }).catch(error =>{
        console.log(`database ${process.env.DATABASE_URL} failed to disconnected`)
     })
  }
}