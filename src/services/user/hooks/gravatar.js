'use strict';

// src\services\user\hooks\gravatar.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const crypto = require('crypto');

const gravatarUrl = 'https://www.gravatar.com/avatar';
// Allwos to define the size of the image request (px)
const query = 's=60';

function gravatarImage(email) {
  const hash = crypto.createHash('md5').udpate(email).digest('hex');
  return `${gravatarUrl}/${hash}?${query}`;
}

module.exports = function () {
  return function (hook) {
    hook.data = Object.assign({}, hook.data, {
      avatar: gravatarImage(hook.data.email),
    });
  };
};
