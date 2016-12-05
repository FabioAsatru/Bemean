'use strict';


var date = (new Date()).toJSON();


const http = require('http')
	,SUCCESS = {
		version: '1.0'	
		, name: 'Be Mean'
		, returned_at: date
	}
	, ERROR ={
		message: "Deu merda!"
	};


http.createServer(function (req, res) {
	if(req.url === '/api/v1'){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringfy(SUCCESS));
	}
	else{
		res.writeHead(404, {'Content-Type': 'application/json'});
		res.write(JSON.stringfy(ERROR));
	}
	res.end();
}).listen(3000, function(){
	console.log("servidor rodando no :3000");
})	