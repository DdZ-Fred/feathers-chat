'use strict';

const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const globalHooks = require('../../../hooks');
const process = require('./process');
const restrictToSender = require('./restrict-to-sender');

// Uses the value of userId to query the 'users' service with
// and set the result (the User object) to the sentBy attribute
const populateSender = hooks.populate('sentBy', {
  service: 'users',
  field: 'userId',
});


exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
  ],
  find: [],
  get: [],
  create: [process()],
  update: [hooks.remove('sentBy'), restrictToSender()],
  patch: [hooks.remove('sentBy'), restrictToSender()],
  remove: [restrictToSender()],
};

exports.after = {
  all: [],
  find: [populateSender],
  get: [populateSender],
  create: [populateSender],
  update: [],
  patch: [],
  remove: [],
};
