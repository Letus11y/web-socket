const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("El wep socket está activo");
});

module.exports = router;