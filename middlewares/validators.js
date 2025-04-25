const { body } = require('express-validator');

const alphaError = 'must contain only alphanumeric characters.';
const lengthError = (min, max) =>
  !min
    ? `must be less than ${max} characters.`
    : `must be between ${min} and ${max} characters.`

const validateResult = [
  body('username').trim()
    .isLength({ min: 1, max: 25 }).withMessage(`username ${lengthError(3, 25)}`)
    .isAlphanumeric().withMessage(`username ${alphaError}`),
  body('messageText').trim()
    .isLength({ min: 1, max: 150 }).withMessage(`message ${lengthError(1, 150)}`),
]

module.exports = validateResult