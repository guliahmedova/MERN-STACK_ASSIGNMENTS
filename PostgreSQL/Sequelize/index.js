const sequelize = require('./config/db');
const Cat = require('./models/cat');
const Dog = require('./models/dog');
const { Op } = require('sequelize');

// Dog
// async function init() {
//     try {
//         await sequelize.authenticate();
//         // await sequelize.sync();

//         // await Dog.create({
//         //     name: "Dog 2",
//         // });

//         // const res = await Dog.findAll();

//         // const res = await Dog.findAll({
//         //     attributes: ['name'],
//         //     where: {
//         //         name: "Dog1"
//         //     }
//         // });

//         // const res = await Dog.findOne({
//         //     where: {
//         //         name: 'Dog1'
//         //     },
//         //     attributes: [['name', 'Dog name']]
//         // });

//         console.log(JSON.stringify(res, null, 2));

//     } catch (error) {
//         console.log(error);
//     } finally {
//         await sequelize.close();
//     }
// };

// init();


// Cat
async function init() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        // await Cat.create({ name: "Tom", age: 5 });
        // await Cat.create({ name: "Jerry", age: 3 });
        // await Cat.create({ name: "Whiskers", age: 4 });
        // await Cat.create({ name: "Garfield", age: 6 });
        // await Cat.create({ name: "Felix", age: 2 });
        // await Cat.create({ name: "Simba", age: 1 });
        // await Cat.create({ name: "Nala", age: 7 });
        // await Cat.create({ name: "Mittens", age: 3 });
        // await Cat.create({ name: "Oliver", age: 4 });
        // await Cat.create({ name: "Luna", age: 5 });

        // const res = await Cat.findAll();

        const res = await Cat.findAll({
            attributes: [['name', 'Cat Name'], ['age', 'Cat Age']],
            where: {
                age: {
                    [Op.gte]: 3
                }
            }
        });

        // const res = await Cat.findOne({
        //     where: {
        //         age: {
        //             [Op.gt]: 4
        //         }
        //     },
        //     attributes: [['name', 'Cat name'], ['age', 'Cat age']]
        // });

        console.log(JSON.stringify(res, null, 2));
    } catch (error) {
        console.log(error);
    } finally {
        await sequelize.close();
    }
};

init();