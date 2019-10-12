const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { v4 } = require('uuid');

const schema = new Schema({
  uid: { type: String },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  company: { type: String },
  phone: { type: String },
  country: { type: String },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

schema.pre('save', function (next) {
  this.uid = `usr-${v4()}`;
  next();
});

module.exports = mongoose.model('User', schema);
