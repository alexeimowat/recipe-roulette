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
    console.log(request.body.data.title);

    let query = 'INSERT INTO savedrecipes (title, time, servings, recipeid, picture, meal, instructions, ingredients, gf, cuisine) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
    // const req = JSON.parse(request.body.data);
    const req = request.body.data;
    // 
    let values = [req.title, req.time, req.servings, req.recipeid, req.picture, req.meal, req.instructions, req.ingredients, req.gf, req.cuisine];

    // console.log("data I guess? $1, $2, $3, $4" [title, time, servings, recipeid]);
    pool.query(query, values,
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