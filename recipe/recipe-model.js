const { select } = require('../data/db-config.js')
const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    getShoppingList,
    getInstructions
}

async function getIngredients(id) {
    try {
        return await db('recipes')
            .join('recipe-ingredients', 'recipe-ingredients.recipe_id', 'recipes.id')
            .join('ingredients', 'recipe-ingredients.ingredient_id', 'ingredients.id')
            .join('units', 'units.id', 'recipe-ingredients.unit_id')
            .where('recipe_id', id)
            .select('ingredients.name', 'recipe-ingredients.quantity', 'units.unit')
    } catch (err) {
        throw err;
    }
}

const getSteps = async (id) => {
    try {
        return await db('recipes')
        .join('recipe-steps', 'recipe-steps.recipe_id', 'recipes.id')
        .join('steps', 'steps.id', 'recipe-steps.step_id')
        .where('recipe_id', id)
        .orderBy('recipe-steps.step_number')
        .select('recipe-steps.step_number', 'steps.step');
    } catch (error) {
        throw (error);
    }
}

async function find() {
    try {
        return await db('recipes')
    } catch (err) {
        throw err;
    }
}

async function findById(id) {
    try {
        const [recipe] = await db('recipes').where({ id }).select('name', 'description')
        const ingredients = await getIngredients(id)
        const steps = await getSteps(id);
        return {...recipe, ingredients, steps}
    } catch (err) {
        throw err
    }
}



async function getShoppingList(id) {
    try {
        return await getIngredients(id)
    } catch (err) {
        throw err
    }
}

async function getInstructions(id) {
    try {
        return await getSteps(id)
    } catch (err) {
        throw err
    }
}