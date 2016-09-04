http.createServer(function(req,resp){
    var name = req.param('name')
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.end('hello world \n'+ name);
}).listen(80,'localhost');
console.log('server started');
