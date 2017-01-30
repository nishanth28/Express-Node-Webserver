var middleWare = {
	requireAuthentication : function (request,request, next){
		console.log('Route Needs Authentication!');
		next();
	},
	logger : function (request,response,next) {
		console.log('Request :'+request.method+' '+request.originalUrl);
		next();
	}
};


module.exports = middleWare;