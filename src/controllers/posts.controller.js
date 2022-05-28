
const pool = require('../db');

const getTodosPosts = async (req, res) => {

    try {
        const result = await pool.query("SELECT * FROM post");

        res.json(result.rows);
   } catch (error) {
        res.json({ error: error.message });
   }
}

const getPost= async (req, res) => {
    const {id} = req.params;

    try {
        const result = await pool.query("SELECT * FROM post WHERE ID = $1 ", [id]);

        if( result.rows.length === 0){
            return res.status(404).json({
                message: "Post no encontrado"
            });
        }

        res.status(200).json(result.rows);

   } catch (error) {
        res.status(500).json({ error: error.message });
   }
}

const creaPost = async (req, res) => {
    const { nombre, descripcion } = req.body;
    console.log(nombre, descripcion);

   try {
        const result = await pool.query("INSERT INTO post (nombre, descripcion) VALUES ($1, $2) RETURNING *", [
            nombre,
            descripcion,
        ]);

        console.log(result.rows[0]);

        res.json(result.rows[0]);
   } catch (error) {
    //    console.log(error.message);
    res.json({ error: error.message });
   }
}

const eliminaPost = async (req, res) => {
    const {id} = req.params;

    try {
        const result = await pool.query("DELETE FROM post WHERE ID = $1 RETURNING *", [id]);

        if( result.rowCount.length === 0){
            return res.status(404).json({
                message: "Post no encontrado"
            });
        }

        // res.status(204).json(result.rows);
        res.sendStatus(204);

   } catch (error) {
        res.status(500).json({ error: error.message });
   }
}

const actualizaPost = async (req, res) => {
    const {id} = req.params;
    const { nombre, descripcion } = req.body;

    try {
        const result = await pool.query("UPDATE post  SET nombre = $1, descripcion=$2 WHERE ID = $3 RETURNING *", [
            nombre,
            descripcion,
            id
        ]);

        if( result.rows.length === 0){
            return res.status(404).json({
                message: "Post no encontrado"
            });
        }

        res.status(200).json(result.rows);

   } catch (error) {
        res.status(500).json({ error: error.message });
   }
}

module.exports = {
    getTodosPosts,
    getPost,
    creaPost,
    eliminaPost,
    actualizaPost
};