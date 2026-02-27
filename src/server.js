const express = require('express');

const app = express();
console.log('Server is running...', app);

app.get('/hello', (req, res) => {
    res.send('Hello World!');
    res.
})

const PORT = 5001;

const server = app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
})
