var express = require('express');

var app = express();

app.use('/',(req, res, next) => {
    let date_ob = new Date();
    let hours = date_ob.getHours();
    if(hours < 8  || hours > 17)
    {
        res.status(503).send('Our office is not open now!');
    }
     else{
        next();
    }
    
 })

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
})
.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
})
.get('/ourservices', (req, res) => {
    res.sendFile(__dirname + '/public/ourservices.html');
});


app.listen(8080);
console.log("Live at 8080..")
