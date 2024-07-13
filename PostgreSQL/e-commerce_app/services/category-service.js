const pool = require('../config/db');
const Category = require('../models/category');

const getAllCategories = async () => {
    const res = await pool.query('SELECT * FROM categories');
    return Category.mapAll(res.rows);
};

const getCategoryById = async id => {
    const res = await pool.query('select * from categories c where c.id = $1 and c.deleted = 0', [id]);
    return Category.mapOne(res.rows[0]);
};

const getCategoryByHierarchy = async (id) => {
    const res = await pool.query('select * from FUNC_GETCATEGORYBYHIERARCHY($1)', [id]);
    return Category.mapAll(res.rows);
};

const addCategory = async category => {
    await pool.query(`CALL ADD_CATEGORY($1, $2, $3);`, [category.code, category.name, category.parent_id]);
};

const updateCategory = async (category) => {
    const { id, code, name, parent_id } = category;
    await pool.query('CALL UPDATE_CATEGORY($1, $2, $3, $4);', [id, code, name, parent_id]);
};

const deleteCategory = async id => {
    const data = await getCategoryByHierarchy(id);
    if (data.length > 1) {
        return { message: "Cannot delete this data" };
    } else {
        await pool.query('CALL DELETE_CATEGORY($1);', [id]);
        return { message: "Category deleted" };
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    getCategoryByHierarchy,
    addCategory,
    updateCategory,
    deleteCategory
};