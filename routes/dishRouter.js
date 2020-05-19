var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('DishRouter resource');
});

router.put('/:id', (req, res) => {

    res.send('put request '+ req.params.id);
});
router.post('/:id', (req, res) => {

    res.send('post request '+ req.params.id);
});

router.delete('/:id', (req, res) => {

    res.send('put delete '+ req.params.id);
});
module.exports = router;
