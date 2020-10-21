const mongoose = require('mongoose');
const Schema=  mongoose.Schema;


const UserAddSchema = new Schema(
    {
      user_name: { type: String, required: true },
      user_number: { type: Number, default: 0 },
      
    },
    {
        timestamps: true
      },)
    module.exports = mongoose.model('user', UserAddSchema);