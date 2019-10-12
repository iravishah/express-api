//@ts-check
"use strict"

module.exports = () => {
  const express = require('express');
  const router = express.Router();

  const utility = require('../lib/utils');
  const user = require('../controller/user');

  const userDetailsSchema = require('../validators/userDetails');

  router.get('/ping',
    utility.ping
  );

  router.post('/user',
    utility.authenicate,
    utility.validateBody(userDetailsSchema),
    user.addUser
  );

  router.get('/users',
    utility.authenicate,
    user.getUsers
  );

  router.all('*', (req, res) => {
    res.status(401).json({ error: 'Unauthorised access', code: 401 });
  });

  return router;
}
