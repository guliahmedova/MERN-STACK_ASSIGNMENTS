// const fs = require('fs');
// const path = require('path');
// const utils = require('util');
// const DB_PATH = path.join(__dirname, '..', "database/db.json");
// const readFileAsync = utils.promisify(fs.readFile);
// const writeFileAsync = utils.promisify(fs.writeFile);

// class DbLogger {
//     constructor(logModel) {
//         this.logModel = logModel;
//     };

//     async log() {
//         console.log('DbLogger');
//         const allData = await readFileAsync(DB_PATH);
//         const jsonData = JSON.parse(allData);
//         jsonData.logs.push(this.logModel);
//         await writeFileAsync(DB_PATH, JSON.stringify(jsonData, null, 2));
//     };
// };

// module.exports = DbLogger;