const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    console.log('working');
    res.send("On lavda lahsun page");
});

router.get('/specific', (req, res) => {
    console.log('working');
    res.send("On specific lavda lahsun page");
});

module.exports = router;