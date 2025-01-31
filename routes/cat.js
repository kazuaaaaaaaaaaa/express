const express = require('express');
const request = require('request');

const router = express.Router();

router.get('/', (req, res) => {
  request('https://api.thecatapi.com/v1/images/search', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      const catImageUrl = data[0].url;
      res.json({ imageUrl: catImageUrl }); // JSON形式でクライアントに返す
    } else {
      res.status(500).json({ error: 'Failed to fetch cat image' });
    }
  });
});

module.exports = router; 