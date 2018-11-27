var server = require("http").createServer();
var io = require("socket.io")(server);
var usersOnline = [];

io.on("connection", socket => {
  socket.on("join", user => {
    console.log(user + " joined");

    const msg = {
      type: "joined",
      name: user,
      ts: Math.floor(Date.now())
    };

    usersOnline.push(user);

    io.emit("new message", msg);
    io.emit("users online", usersOnline);
  });

  socket.on("message", msg => {
    io.emit("new message", msg);
  });

  socket.on("disconnect", user => {
    usersOnline.splice(usersOnline.indexOf(user), 1);

    io.emit("users online", usersOnline);
  });
});

server.listen(8000, function() {
  console.log("listening on *:8000");
});
