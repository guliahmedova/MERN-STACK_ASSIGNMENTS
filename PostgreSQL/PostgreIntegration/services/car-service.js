const pool = require('../config/db');

const getAllcars = async () => {
    const res = await pool.query('select * from cars');
    return res.rows;
};

const getCarById = async (id) => {
    const res = await pool.query('select * from cars b where b.id = $1', [id]);
    return res.rows[0];
};

const createCar = async (car) => {
    const { name } = car;
    const res = await pool.query('insert into cars(name) values($1) returning *', [name]);
    return res.rows[0];
};

const updateCar = async (car) => {
    const { id, name } = car;
    const res = await pool.query('update cars set name = $1 where id = $2 returning *', [name, id]);
    return res.rows[0];
};

const deleteCar = async (id) => {
    const res = await pool.query('delete from cars where id = $1 returning *', [id]);
    return res.rows[0];
};

// const testingInitalize = async () => {
//     await createCar({ name: "Aplle" });

//     const allData = await getAllcars();
//     console.log("alldata: ", allData);
// };

// testingInitalize();

const testingInitalize2 = async () => {
    const res = await getAllcars();
    console.log(res);
};

testingInitalize2();