var server = require("http").createServer();
var io = require("socket.io")(server);

var usersDatabase = {
  accounts: {},
  online: {}
};

io.on("connection", socket => {
  const id = socket.id;

  socket.on("join", baseCard => {
    const JoinMessage = {
      type: "joined",
      msg: "has joined",
      name: baseCard.name,
      ts: baseCard.registered
    };

    usersDatabase.accounts[id] = baseCard;

    const publicCard = {
      name: baseCard.name,
      isTyping: false
    };

    usersDatabase.online[id] = publicCard;

    io.emit("new message", JoinMessage);
    io.emit("users online", usersDatabase.online);
  });

  socket.on("message", msg => {
    io.emit("new message", msg);
  });

  // socket.on("writing message", name => {
  //   usersDatabase.push({
  //     [name]: {
  //       name,
  //       isTyping: true
  //     }
  //   });

  // io.emit("user writing", msg);
  // });

  socket.on("disconnect", () => {
    const leftMessage = {
      type: "left",
      msg: "has disconnected",
      name: usersDatabase.accounts[id].name,
      ts: Math.floor(Date.now())
    };
    console.log(usersDatabase.accounts);
    delete usersDatabase.accounts[id];
    delete usersDatabase.online[id];

    io.emit("users online", usersDatabase.online);
    io.emit("new message", leftMessage);
  });
});

server.listen(8000, () => {
  console.log("listening on *:8000");
});
