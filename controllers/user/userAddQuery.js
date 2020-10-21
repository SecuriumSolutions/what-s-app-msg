const dao = require ('../../Dao/userDao')
 const addUserQuery = async  function (request, response){
    let {data} = request;
    if(!data.user_name || data.user_number){
        console.log('body parameters  missing')
    return response.params_missing();
    };
    let docObject = {
        user_name: data.user_name,
        user_number: data.user_number,
      };
      const createCourse = await dao.add(docObject);
          if(!createCourse){
              console.log('Error in add user');
              return response.db_error();
          };
          return response.status(201).success('Add user sucessfully');
    
 };
 module.exports={
     addUserQuery
 }