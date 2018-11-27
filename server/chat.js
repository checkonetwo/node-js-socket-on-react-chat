var server = require("http").createServer();
var io = require("socket.io")(server);

io.on("connection", socket => {
  console.log("user connected");

  socket.on("join", name => {
    console.log(name + " joined");

    const msg = {
      type: "joined",
      name,
      ts: Math.floor(Date.now())
    };

    io.emit("new message", msg);
  });

  socket.on("message", msg => {
    io.emit("new message", msg);
  });

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

server.listen(8000, function() {
  console.log("listening on *:8000");
});
