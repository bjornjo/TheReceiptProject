'use strict';

const extend = require('lodash').assign;
const mysql = require('mysql');
const config = require('../config');

function getConnection () {
  const options = {
    user: config.get('MYSQL_USER'),
    password: config.get('MYSQL_PASSWORD'),
    database: 'zeipt_login'
  };

  if (config.get('INSTANCE_CONNECTION_NAME') && config.get('NODE_ENV') === 'production') {
    options.socketPath = `/cloudsql/${config.get('INSTANCE_CONNECTION_NAME')}`;
  }

  return mysql.createConnection(options);
}

// [START list]
function list (limit, token, cb) {
  token = token ? parseInt(token, 10) : 0;
  const connection = getConnection();
  connection.query(
    'SELECT * FROM `emails` LIMIT ? OFFSET ?', [limit, token],
    (err, results) => {
      if (err) {
        cb(err);
        return;
      }
      const hasMore = results.length === limit ? token + results.length : false;
      cb(null, results, hasMore);
    }
  );
  connection.end();
}
// [END list]

// [START create]
function create (data, cb) {
  const connection = getConnection();
  connection.query('INSERT INTO `emails` SET ?', data, (err, res) => {
    if (err) {
      cb(err);
      return;
    }
    read(res.insertId, cb);
  });
  connection.end();
}
// [END create]

function read (id, cb) {
  const connection = getConnection();
  connection.query(
    'SELECT * FROM `emails` WHERE `id` = ?', id, (err, results) => {
      if (err) {
        cb(err);
        return;
      }
      if (!results.length) {
        cb({
          code: 404,
          message: 'Not found'
        });
        return;
      }
      cb(null, results[0]);
    });
  connection.end();
}


module.exports = {
    createSchema: createSchema,
    list: list,
    create: create,
    read: read
};

if (module === require.main) {
    const prompt = require('prompt');
    prompt.start();

    console.log(
        `Running this script directly will allow you to initialize your mysql database.
    This script will not modify any existing tables.`);

    prompt.get(['user', 'password'], (err, result) => {
        if (err) {
            return;
        }
        createSchema(result);
    });
}

function createSchema(config) {
    const connection = mysql.createConnection(extend({
        multipleStatements: true
    }, config));

    connection.query(
        `CREATE DATABASE IF NOT EXISTS \`zeipt_login\`
      DEFAULT CHARACTER SET = 'utf8'
      DEFAULT COLLATE 'utf8_general_ci';
    USE \`zeipt_login\`;
    CREATE TABLE IF NOT EXISTS \`zeipt_login\`.\`emails\` (
      \`id\` INT UNSIGNED NOT NULL AUTO_INCREMENT,
      \`email\` VARCHAR(255) NOT NULL,
      \`publishedDate\` VARCHAR(255) NULL,
    PRIMARY KEY (\`id\`));`,
        (err) => {
            if (err) {
                throw err;
            }
            console.log('Successfully created schema');
            connection.end();
        }
    );
}
