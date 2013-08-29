var express = require('express'),
  redis = require("redis"),
  client = redis.createClient(),
  app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/fedex'));
app.use(express.bodyParser());

app.post('/save', function(req, res) {
  var data = req.body;
  if (data.personalDetails_permanentResident_radioNo) {
    client.hkeys('data', function(err, keys) {
      keys.forEach(function(key) {
        client.hdel('data', key);
      });
    });
    return;
  }
  for (var key in data) {
    client.hset('data', key, data[key]);
  };
});

app.get('/data', function(req, res) {
  client.hgetall('data', function(err, data) {
    res.send(data);
  });
});

app.listen(3000);