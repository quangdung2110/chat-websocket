
const socket = io();
const chatMessage = document.querySelector('.chat-messages');
const chatForm = document.querySelector('#chat-form');
const userss = document.querySelector('#users');
const UrlParams = new URLSearchParams(window.location.search);
const user = UrlParams.get('username');
const roomName = UrlParams.get('room');
console.log(user, roomName);

document.querySelector('#room-name').innerHTML = roomName;

socket.emit('joinRoom', ({ user, roomName }));
socket.on('listUser', (users) => {
    userss.innerHTML = (users.map((user) => (`<li>${user.name}</li>`)).join(""));
})

const outputMessage = (message) => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username}<span>${message.time}</span></p>
        <p class="text">${message.text}</p>`;
    chatMessage.append(div);
}

socket.on('message', (data) => {
    console.log(data);
    outputMessage(data);
})

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const msg = e.target.elements.msg.value;
    console.log(msg);
    socket.emit('chatMessage', msg);
    e.target.elements.msg.value = "";
})

