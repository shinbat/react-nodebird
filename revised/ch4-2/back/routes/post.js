const express = require('express');

const router = express.Router();


router.post('/', (req, res) => {
    res.json({ id: 1, content: 'hello1' });
});

router.delete('/', (req, res) => {
    res.send('hello api');
});



module.exports = router;