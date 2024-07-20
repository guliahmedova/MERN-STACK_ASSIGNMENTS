const CategoryAddDto = require('../../models/categoryAdd');
const categoryService = require('../../services/category-service');

const getAllCategories = async (req, res) => {
    const data = await categoryService.getAllCategories();
    res.json(data);
};

const getCategoryById = async (req, res) => {
    const data = await categoryService.getCategoryById(req.params.id);
    res.json(data);
};

const getCategoryByHierarchy = async (req, res) => {
    const data = await categoryService.getCategoryByHierarchy(req.params.id);
    res.json(data);
};

const addCategory = async (req, res) => {
    const categoryAddDto = new CategoryAddDto(req.body);
    await categoryService.addCategory(categoryAddDto);
    res.status(201).json({ message: "Category has been added successfully" });
};

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const category = { id, ...req.body }; 
    await categoryService.updateCategory(category);
    res.status(200).json({ message: "Category has been updated successfully" });
};

const deleteCategory = async (req, res) => {
    const result = await categoryService.deleteCategory(req.params.id);
    res.json(result);
};

module.exports = {
    getAllCategories,
    getCategoryById,
    getCategoryByHierarchy, 
    addCategory,
    updateCategory,
    deleteCategory
};