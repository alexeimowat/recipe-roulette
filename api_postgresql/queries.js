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

// Save a recipe to the database
const saveRecipe = (request, response) => {
    // get the request recipe information
    console.log(request.body.data.title);

    let query = 'INSERT INTO savedrecipes (title, time, servings, recipeid, picture, meal, instructions, ingredients, gf, cuisine) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
    const req = request.body.data;
    // 
    let values = [req.title, req.time, req.servings, req.recipeid, req.picture, req.meal, req.instructions, req.ingredients, req.gf, req.cuisine];

    pool.query(query, values,
            (error, results) => {
                if (error) {
                    throw(error)
                }
                response.status(200).send(`Row Added`);
            }) 

}

/** Updates the row with the new values based on the recipeid */
const updateRow = (request, response) => {
    let query = 'UPDATE savedrecipes SET title=$1, time=$2, servings=$3, recipeid=$4, picture=$5, meal=$6, instructions=$7, ingredients=$8, gf=$9, cuisine=$10) WHERE recipeid=$4';
    const req = request.body.data;

    let values = [req.title, req.time, req.servings, req.recipeid, req.picture, req.meal, req.instructions, req.ingredients, req.gf, req.cuisine];

    pool.query(query, values,
        (error, results) => {
            if (error) {
                throw(error)
            }
            response.status(200).send('Row Updated');
        })
}

module.exports = {
    getSaved,
    removeSaved,
    saveRecipe,
    updateRow
}