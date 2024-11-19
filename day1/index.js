const http = require ("http");
const port = 8000;

const portHandler = (req,res)=>{
    res.write("<h1>welcome to server</h1>")
}
const server = http.createServer(portHandler);
server.listen (port,(err)=>{
    err ? console.log(err):console.log("server started on port" + port);
});