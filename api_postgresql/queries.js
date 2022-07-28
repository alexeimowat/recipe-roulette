const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'arkhym',
    host: 'localhost',
    database: 'recipes',
    password: 'Tywah+Ahwex1122',
    port: 5432
});

const getSaved = (request, response) => {
    pool.query('select * from savedrecipes', (error, results) => {
        if (error) {
            throw(error)
        }
        response.status(200).json(results.rows);
    })
}

module.exports = {
    getSaved
}