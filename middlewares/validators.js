const { body } = require('express-validator');

const alphaError = 'must contain only alphanumeric characters.';
const lengthError = (min, max) =>
  !min
    ? `must be less than ${max} characters.`
    : `must be between ${min} and ${max} characters.`

const validateResult = [
  body('username').trim()
    .isLength({ min: 3, max: 15 }).withMessage(`username ${lengthError(3, 15)}`)
    .isAlphanumeric().withMessage(`username ${alphaError}`),
  body('messageText').trim()
    .isLength({ min: 3, max: 115 }).withMessage(`message ${lengthError(1, 115)}`),
]

module.exports = validateResult