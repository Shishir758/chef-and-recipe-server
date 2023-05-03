
const express = require('express')
const app = express()
const cors = require('cors');
const port =process.env.PORT || 5000;

const detailsdata = require ('./data/detailsData.json')



app.use(cors());

app.get('/', (req, res) => {
    res.send('Running');
  })

app.get('/detailsdata', (req, res) => {
  res.send(detailsdata);
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})