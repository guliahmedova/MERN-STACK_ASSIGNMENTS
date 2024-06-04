const axios = require('axios');

class TgLogger {
    constructor() { };

    async log(logModel) {
        console.log('TgLogger');
        const token = '';
        const chatId = 0;

        const message = JSON.stringify(logModel);
        const url = `https://api.telegram.org/bot${token}/${chatId}`;

        axios.post(url, {
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown"
        }).then((res) => {
            if (res.status !== 200) {
                console.error('Error occured whule sending message to Telegram', res.data);
            }
        }).catch(err => {
            console.error("Error: ", err);
        });
    };
};

module.exports = TgLogger;