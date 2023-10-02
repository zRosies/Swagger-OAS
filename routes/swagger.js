const router= require('express').Router();
const swaggerUi= require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.use('/apiInfo', swaggerUi.serve);
router.get('/apiInfo', swaggerUi.setup(swaggerDocument));

module.exports= router;