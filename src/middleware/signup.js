'use strict';

module.exports = function (app) {
  return function ({ body }, res, next) {
    // Get form data
    const { email, password } = body;

    // Create new user using 'users' service accessible via app
    app.service('users').create({
      email,
      password,
    })
    .then(user => res.redirect('/login.html'))
    .catch(next);
  };
};
