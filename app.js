const express = require('express')
const axios = require('axios');

const app = express()
const port = 5999

app.set('view engine', 'ejs');




app.get('/', function (req, res) {
    res.render('pages/weather', { title: 'Hey', message: 'Hello there!' })
})

// app.get('/hello',function(req, res){
// res.send('world')

// })
app.get('/api',function(a,b){
    b.send('hey there i am uesing api')
})
// app.get('/api',function(a,b){
//     b.send("hey there i am uesing api")
// })
// app.get('/about', function (req, res) {
//     res.send("sadsada")
// })
// app.get("/weather", functionj(a,b){
//   b.render('')
// })

// app.get('/abir', function (req, res) {
//     res.send("i am abir")
// })

app.get('/weather', function (req, res) {
    var url = "http://api.weatherapi.com/v1/current.json?key=7757fa657eb84c9f961100439210412&q="+req.query.location+"&aqi=no"
    
    axios.get(url)
    .then(function (response) {        
        console.log(response);
        res.render('pages/card', { data: response.data })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})