'use strict';
const throng = require('throng');
const os = require('os');
const app = require('./app');
const env = require('../env');

const port = app.get('port');
// const server = app.listen(port);
//
// server.on('listening', () =>
//   console.log(`Feathers application started on ${app.get('host')}:${port}`)
// );
//
//

const WORKERS_1 = os.cpus().length;
const WORKERS_2 = env.WEB_CONCURRENCY;

function start() {
  app.listen(port, () => {
    console.log(`WORKER #${process.pid} is listening on localhost:${port}`);
  });
}

throng(start);
