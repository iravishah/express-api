const _ = require('lodash');
const { isEmail } = require('validator');

const m = require('../responses/responses.json');

const { reply } = require('../lib/utils');
const { createUser, listUsers } = require('../db/mongoUtils');

async function addUser(req, res, next) {
  const body = req.body;

  if (!isEmail(body.email)) {
    return reply(res, m.m103);
  }

  const [err, user] = await createUser(body);
  if (err) {
    return reply(res, m.m102);
  }
  res.status(201).json(user);
}

async function getUsers(req, res, next) {
  const [err, users] = await listUsers();
  if (err) {
    return reply(res, m.m102);
  }
  res.status(200).json({ users });
}

module.exports = {
  addUser,
  getUsers
}