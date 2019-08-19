const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// define a simple route
app.get('/', (req, res) => {
    var db = new sqlite3.Database('./awsm.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the database.');
    });
    db.serialize(function () {
        debugger;
        db.each("SELECT * FROM userlogin", function (err, row) { res.json(row); });
    });

    db.close();
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
// let port = process.env.PORT || 4000;

// const server = app.listen(function () {
//     console.log('Listening on port ' + port);
// });
