const { Server } = require("socket.io");

let io;
const intialize=(server)=>{

    io = new Server(server, {cors: {origin: "*"}});

    io.on("connection", (socket) => {
        console.log("a user connected");
        socket.on("chat message", (msg) => {
            console.log("message:" + msg);
        });
        socket.on("disconnect", () => {
          console.log("a user disconnected");
        });
      });
}

const getIO=()=>{
    return io;
}

module.exports= {intialize, getIO}