// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.get('/comments', (req, res) => {
    res.json({ comments: ['comment 1', 'comment 2', 'comment 3'] });
});
app.listen(port, () => {
    console.log(`Comments service is listening at http://localhost:${port}`);
});
