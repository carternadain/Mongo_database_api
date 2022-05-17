const { Schema, model } = require('mongoose');

// const UserSchema = new Schema({
//     UserName: {
//       type: String
//     },
//     email: {
//       type: String
//     },
//     thoughts: {
//       type: Date,
//       default: Date.now
//     },
//     friends: {
//       type: String,
//       default: 'Large'
//     },
//     toppings: []
//   });


  // create the Pizza model using the PizzaSchema
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;