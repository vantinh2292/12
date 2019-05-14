let apiKey = 'f0673527f9200484ceae71cb08d7e587';
let city1 = 'Hanoi';
let city2 = 'Danang';
let city3 = 'Saigon';
var count=0;
let url1 = `http://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apiKey}&units=metric`;
let url2 = `http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${apiKey}&units=metric`;
let url3 = `http://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${apiKey}&units=metric`;
var HaNoi=0,Danang=0,Saigon=0;
var firebase = require('firebase');
var app = firebase.initializeApp(
    {
        apiKey: "AIzaSyDZF1-ipAZ81EENp2NtdxRlrq6V7FmWX4s",
        authDomain: "fir-1-81fde.firebaseapp.com",
        databaseURL: "https://fir-1-81fde.firebaseio.com",
        projectId: "fir-1-81fde",
        storageBucket: "fir-1-81fde.appspot.com",
        messagingSenderId: "445926783318"
    }
);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  console.log(getRandomInt(3));
  // expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // expected output: 0
  
  console.log(Math.random());


// var myInt = setInterval(function () {
//     request(url1, { json: true }, function (err, response, body) {
//         if (err) {
//             console.log('error:', err);
//         } else {
//             Hanoi= body.main.temp;
//         }
//     });
//     request(url2, { json: true }, function (err, response, body) {
//         if (err) {
//             console.log('error:', err);
//         } else {
//             Danang = body.main.temp;
//         }
//     });
//     request(url3, { json: true }, function (err, response, body) {
//         if (err) {
//             console.log('error:', err);
//         } else {
//             Saigon= body.main.temp;
//         }
//     });

// }, 3000);

setInterval(function(){
    app.database().ref('Table1/Temperature').push({
        Hanoi: 25+getRandomInt(5),
        Danang: 20+getRandomInt(7),
        Saigon:30+getRandomInt(5),
        createAt:Date.now(),
        counter:count
    });
    count=count+1;
},2000)

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(process.env.PORT ||8080); //the server object listens on port 8080