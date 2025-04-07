
const users = [];

const createUser = (id, name, room) => {
    const user = {
        id,
        name,
        room
    }
    users.push(user);
    return user;
}

const deleleUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index != -1) {
        return users.splice(index, 1)[0];
    }
}

const getFullUserInRoom = (room) => {
    return users.filter(user => user.room === room);
}

const getCurrentUser = (id) => {
    return users.find(user => user.id === id);
}

module.exports = {
    createUser,
    deleleUser,
    getFullUserInRoom,
    getCurrentUser
}