const pool = require('../config/db');
const path = require('path');
const fs = require('fs');

const createCat = async (cat) => {
    const imagePath = path.join(__dirname, '..', 'img.jpg');
    const imageData = fs.readFileSync(imagePath);
    const byteArray = Buffer.from(imageData);
    const res = await pool.query('insert into Cats(name, photo) values($1, $2) returning *', [cat.name, cat.photo, byteArray]);

    return res.rows(0);
};

const result = createCat({
    name: "Tom"
});

console.log(result);