const express = require('express');
const { getRandomEmoji } = require('./function/'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    return res.sendFile(__dirname + '/public/index.html');
});

app.get('/emoji', async (req, res) => {
    var data = await getRandomEmoji();
    res.json({
      status: true,
      result: data,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
