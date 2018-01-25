'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');

function getModel () {
  return require(`./model-${config.get('DATA_BACKEND')}`);
}

const router = express.Router();

// Automatically parse request body as JSON
router.use(bodyParser.json());


/**
 * POST /api/emails
 *
 * Create a new email.
 */
router.post('/', (req, res, next) => {
    getModel().create(req.body, (err, entity) => {
        if (err) {
            next(err);
            return;
        }
        res.json(entity);
    });
});

/**
 * Errors on "/api/emails/*" routes.
 */
router.use((err, req, res, next) => {
    // Format error and forward to generic error handler for logging and
    // responding to the request
    err.response = {
        message: err.message,
        internalCode: err.code
    };
    next(err);
});

module.exports = router;