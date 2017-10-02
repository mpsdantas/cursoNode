// Importar as configurações do servidor.
var app = require('./config/server');

// Parametrizar a porta de escuta.
var server = app.listen(3000,function() {
    console.log('Servidor On');
})


var io = require('socket.io').listen(server);

app.set('io',io);

//Criar conexão para o web socket
io.on('connection',function(socket){
    console.log('Usuario conectou.');
    socket.on('disconnect',function(){
        console.log('Usuário desconectado.');
    });
    socket.on('msgParaServidor',function(data){

        //Dialogo   
        socket.emit(
            'msgParaCliente',
            {apelido: data.apelido,mensagem: data.mensagem}
        );
        socket.broadcast.emit(
            'msgParaCliente',
            {apelido: data.apelido,mensagem: data.mensagem}
        );

        //Participantes
        if(parseInt(data.apelido_atualizado_nos_clientes)==0){
            socket.emit(
                'participantesParaClientes',
                {apelido: data.apelido}
            );
            socket.broadcast.emit(
                'participantesParaClientes',
                {apelido: data.apelido}
            );
        }
        
    });
});