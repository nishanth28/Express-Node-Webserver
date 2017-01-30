var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var date = new Date().toString();

var middleWare = require('./middleWare.js')



//application level middleware
app.use(middleWare.logger);
//put,patch,delete
app.get('/about', middleWare.requireAuthentication, function (request,response){
	response.send('Nishanth-iOS/Full Stack Developer');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function (){
	console.log('Express server Started at port : ' + PORT);
});