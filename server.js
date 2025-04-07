const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const socketio = require('socket.io');
const messageFormat = require('./utils/messageFormat');
const { createUser, deleleUser, getFullUserInRoom, getCurrentUser } = require('./utils/users');
const io = socketio(server);


const port = process.env.PORT || 3000;
const chatBot = 'ADMIN';


app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
    socket.on('joinRoom', ({ user, roomName }) => {
        const newUser = createUser(socket.id, user, roomName);
        console.log(newUser);
        socket.join(roomName);
        socket.emit('message', messageFormat(chatBot, 'Welcome'));
        socket.broadcast.to(roomName).emit('message', messageFormat(chatBot, `${user} has join the chat`));
        io.to(roomName).emit('listUser', getFullUserInRoom(roomName));
    })

    socket.on('disconnect', () => {
        const user = deleleUser(socket.id);
        console.log(socket.id);
        console.log(user);
        if (user) {
            io.to(user.room).emit('message', messageFormat(chatBot, `${user.name} user has left the chat`));
            io.to(user.room).emit('listUser', getFullUserInRoom(user.room));
        }
    })
    socket.on('chatMessage', (msg) => {
        const user = getCurrentUser(socket.id);
        if (user) {
            io.emit('message', messageFormat(user.name, msg));
        }
    })
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})