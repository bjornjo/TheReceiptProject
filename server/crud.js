'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');

function getModel() {
    return require(`./model-${config.get('DATA_BACKEND')}`);
}

const router = express.Router();

// Automatically parse request body as form data
router.use(bodyParser.urlencoded({ extended: false }));

// Set Content-Type for all responses for these routes
router.use((req, res, next) => {
    res.set('Content-Type', 'text/html');
    next();
});

/**
 * POST /emails
 *
 * Create an email.
 */
// [START add_post]
router.post('/add', (req, res, next) => {
    const data = req.body;

    // Save the data to the database.
    getModel().create(data, (err, savedData) => {
        if (err) {
            next(err);
            return;
        }
        res.redirect(`${req.baseUrl}/${savedData.id}`);
    });
});
// [END add_post]

/**
 * Errors on "/emails/*" routes.
 */
router.use((err, req, res, next) => {
    // Format error and forward to generic error handler for logging and
    // responding to the request
    err.response = err.message;
    next(err);
});

module.exports = router;
