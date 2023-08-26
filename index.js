
const http = require('http')
const handleAllRequests =(requestObject, responseObject)=>{
console.log('Hi, I just received a request');
responseObject.write('Kofi is a boy');
responseObject.end();
}

const server= http.createServer(handleAllRequests)  

server.listen(3000, '127.0.0.1', ()=>console.log('Server is ready to accept request'))