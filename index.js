
const http = require('http')
const handleAllRequests =(requestObject, responseObject)=>{
console.log('Hi, I just received a request');
const url = requestObject.url;
if (url==='/'){
    responseObject.write('<h1>THIS IS THE HOME PAGE</h1>')
}else if(url==='/login'){
    requestObject.write('<h2>THIS IS THE LOGIN IN PAGE</h2>')
}else {
    requestObject.write ('<h1>Error</h1>')
}
responseObject.end();
}

const server= http.createServer(handleAllRequests)  

server.listen(3000, '127.0.0.1', ()=>console.log('Server is ready to accept request'))