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

module.exports = {
    getSaved,
    removeSaved
}