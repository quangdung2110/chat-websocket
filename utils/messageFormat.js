const moment = require("moment");

const messageFormat = (username, text) => {
    const message = {
        username,
        text,
        time: moment().format('h:mm a')
    }
    return message;
}

module.exports = messageFormat;