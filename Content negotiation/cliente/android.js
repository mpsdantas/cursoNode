var http = require('http');

var buffer_corpo_response = [];
http.get('http://localhost:8080',function(res){
    
    res.on('data',function(pedaco){
        buffer_corpo_response.push(pedaco);
    });
    res.on('end',function(){
        var corpo_response = Buffer.concat(buffer_corpo_response).toString();
        console.log(corpo_response);
    });
    
    res.on('error',function(){

    });
});