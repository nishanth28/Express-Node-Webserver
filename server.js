var express = require('express');
var app = express();
var port = 3000;
var date = new Date().toString();

var middleware = require('/.middleWare.js')



//application level middleware
app.use(middleware.logger);
//put,patch,delete
app.get('/about', middleware.requireAuthentication, function (request,response){
	response.send('Nishanth-iOS/Full Stack Developer');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function (){
	console.log('Express server Started at port : ' + port);
});