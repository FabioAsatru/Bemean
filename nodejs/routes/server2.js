'use strict';


var date = (new Date()).toJSON();


const http = require('http')
	,SUCCESS = {
		version: '1.0'	
		, name: 'Be Mean'
		, returned_at: date
	}
	, ERROR = {
		message: "Não Encontrado"
	};


http.createServer(function(req, res) {
	if(req.url === '/api/v1'){
		res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
		res.write(JSON.stringify(SUCCESS));
	}	
	else{
		res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8'});
		res.write(JSON.stringify(ERROR));
	}
	res.end();
}).listen(3006, function(){
	console.log("servidor rodando no :3000");
});	