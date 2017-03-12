/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var net=require('net');
var server=net.createServer((function(socket)
{
    socket.end("Hello World");
}));

server.listen(7000,"127.0.0.1");
