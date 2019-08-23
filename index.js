const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/orang/:nama', function(req, res) {
  var namaOrang = req.params.nama;
  res.end('Menampilkan nama siswa: ' + namaOrang);
});

app.post('/orang', function(req, res) {
  var namaOrang = req.body.nama;
  var alamat = req.body.alamat;
  res.end(
    'Menampilkan orang bahru, atas nama: ' +
      namaOrang +
      ', yang beralamat di ' +
      alamat
  );
});

app.delete('/orang/:id', function(req, res) {
  var id = req.params.id;
  var namaOrang = req.body.nama;
  res.end('ID ' + id + ' telah dihapus, atas nama ' + namaOrang);
});

app.put('/orang/:id', function(req, res) {
  var id = req.params.id;
  var namaOrang = req.body.nama;
  var alamat = req.body.alamat;
  res.end('Seseorang dengan ID ' + id + ', telah terupdate.');
});

app.listen(port, function() {
  console.log(`Terkoneksi!`);
});
