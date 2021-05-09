const Blockchain = require('./blockchain');
const express = require('express');
const app = express();

const bitcoin = new Blockchain();

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));

app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
});

app.post('/transaction', function (req, res) {
  console.log(req.body);
  res.send(`The amount of the transaction is ${req.body.amount} bitcoin.`);
});

app.get('/mine', function (req, res) {});

app.listen(3000, function () {
  console.log('listening on port 3000...');
});
