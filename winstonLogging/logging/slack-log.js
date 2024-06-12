// const Slack = require('@slack/bolt');

// class SlackLogger {
//     constructor() { };

//     async log(logModel) {
//         const token = "xoxb-7201500972726-7201567550630-RthVrKWp5foORZu0ilHAHdC2";
//         const secretKey = "488fbc8bec118505d0d84667df5513a5";
//         const channel = "ms003";

//         const app = new Slack.App({
//             signingSecret: secretKey,
//             token: token
//         });

//         await app.client.chat.postMessage({
//             token: token,
//             channel: channel,
//             text: logModel
//         });
//     };
// };

// module.exports = SlackLogger;