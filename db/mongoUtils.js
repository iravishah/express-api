const mongoose = require('mongoose');

require('../models/user');

const User = mongoose.model('User');

const { wait } = require('../lib/utils');
/**
 *
 *
 * @param {*} data
 * @returns promise
 */
async function createUser(data) {
  return await wait(User.create, User, data);
}
/**
 *
 *
 * @param {*} query
 * @param {*} select
 * @param {*} opts
 * @returns promise
 */
async function listUsers(query = {}, select = {}, opts = {}) {
  return await wait(User.find, User, query, select, opts);
}

module.exports = {
  createUser,
  listUsers
}