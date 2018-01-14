const express = require('express')
const app = express()
const cors = require('cors')
const sampleSize = require('lodash/fp/sampleSize');
console.info(sampleSize)
const wreslters = require('./wrestlers.json');
const create = (number = 32, type) => {
    const _wreslters = [...wreslters.singles];
    console.info()
    return sampleSize(number, _wreslters);
}


app.use(cors())
app.get('/api/v1/tournament', (req, res) => {
    return res.json({ data: create() })
});

app.listen(3001, () => console.log('Example app listening on port 3001!'))