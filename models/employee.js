 const mongoose = require('mongoose');
 

 const EmployeeSchema = new mongoose.Schema(
   {
     name: {
       type: String,
       required: true,
     },
        email: {
        type: String,
        required: true,
        
        },

        phone:{
        type: String,
        required: true,

        },

     image: {
       public_id: {
         type: String,
       },
       url: {
         type: String,
       },
     },
   },
   {
     timestamps: true, 
   }
 );
 
 // Create model
 const EmployeeModel = mongoose.model('employee', EmployeeSchema);
 module.exports = EmployeeModel;
 