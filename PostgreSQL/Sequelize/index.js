const sequelize = require('./config/db');
const Brand = require('./models/brand');

async function init() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        Brand.create({
            name: "blabla",
        });

        // const res = await Brand.findAll();
        
        // const res = await Brand.findOne({
        //     where: {
        //         name: 'apple'
        //     }
        // });

        // console.log(JSON.stringify(res, null, 2));

    } catch (error) {
        console.log(error);
    } finally {
        await sequelize.close();
    }
};

init();