const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'arkhym',
    host: 'localhost',
    database: 'recipes',
    password: 'Tywah+Ahwex1122',
    port: 5432
});

// get all saved recipes from the database 
const getSaved = (request, response) => {
    // console.log("Calling getSaved...");
    pool.query('select * from savedrecipes', (error, results) => {
        if (error) {
            throw(error)
        }
        response.status(200).json(results.rows);
    })
}

// const getRecipe = (request, response) => {
//     pool.query('select * from savedrecipes where title ')
// }

// delete the row corresponding to the given recipeID
const removeSaved = (request, response) => {
    // const recipeID = parseInt(request.params.id)
    const recipeID = request.params.id;
    
    pool.query('delete from savedrecipes where recipeID = $1 returning *', [recipeID], (error, results) => {
        if (error) {
            throw(error)
        }
        response.status(200).json(results.rows);
    })
}

const saveRecipe = (request, response) => {
    // get the request recipe information
    const rows = '(title, time, servings, recipeid, picture, meal, instructions, ingredients, gf, cuisine)';
    const recipeDetails = request.params.id;
    const { title, time, servings, recipeid, picture, meal, instructions, ingredients, gf, cuisine } = request.body;

    // console.log("data I guess? $1, $2, $3, $4" [title, time, servings, recipeid]);
    pool.query('insert into savedrecipes $1 values ($2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
            [title, time, servings, recipeid, picture, meal, instructions, ingredients, gf, cuisine],
            (error, results) => {
                if (error) {
                    throw(error)
                }
                response.status(200).send(`Row Added`);
            }) 

}

module.exports = {
    getSaved,
    removeSaved,
    saveRecipe
}