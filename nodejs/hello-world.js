var http = require('http');


http.createServer(function(request, response) {
	response.writeHead(200, {"Contente-Type": "text/plain"});
	response.write("Be mean");
	response.end();
}).listen(3000, function(){
		console.log('Servidor rodando em localHost:3000')
});