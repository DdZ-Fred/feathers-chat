'use strict';

// src\services\message\hooks\process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function (options) {
  options = Object.assign({}, defaults, options);

  return function (hook) {
  // Authenticated user info
    const { user } = hook.params;
    const text = hook.data
      .substring(0, 400)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    hook.data = {
      text,
      userId: user._id,
      createdAt: new Date().getTime(),
    };
  };
};
