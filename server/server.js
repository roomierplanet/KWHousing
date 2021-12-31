const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const db = require('./db');

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

const port = process.env.PORT;

const Properties = express.Router();

app.use('/api/v1/properties', Properties);

Properties.get('/', async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM properties');
        const {rows} = results;
        res.status(200).json({
            status: "success",
            results: rows.length,
            data: {
                properties: rows
            } 
        });
    } catch (err) {
        res.status(404).send(err.message);
    }
});

Properties.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const results = await db.query('SELECT * FROM properties WHERE id = $1', [id]);
        const {rows} = results;
        if (results.rowCount === 0) {
            throw new Error('This property cannot be retrieved!');
        }
        res.status(200).json({
            status: "success",
            results: rows.length,
            data: {
                property: rows[0]
            }
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
});

Properties.post('/', async (req, res) => {
    try {
        const {name, address, rent_corp} = req.query;
        if (!name || !address || !rent_corp) {
            throw new Error('Incomplete information provided!');
        }
        await db.query('INSERT INTO properties(name, address, rent_corp) VALUES($1, $2, $3)', [name, address, rent_corp]);
        res.status(200).json({
            status: "success"
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
});

Properties.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const {name, address, rent_corp} = req.query;
        const results = await db.query('UPDATE properties SET name = $1, address = $2, rent_corp = $3 WHERE id = $4', [name, address, rent_corp, id]);
        if (!name || !address || !rent_corp) throw new Error('Wrong information provided');
        if (results.rowCount === 0) throw new Error('Invalid ID provided');
        res.status(200).json({
            status: "success"
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
});

Properties.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const results = await db.query('DELETE FROM properties WHERE id = $1', [id]);
        if (!id) throw new Error('Information missing for deletion');
        if (results.rowCount === 0) throw new Error('Invalid ID provided');
        res.status(204).send();
    } catch(err) {
        res.status(404).send(err.message);
    }
});

app.listen(port, () => {
    console.log('Server listening on port '+ port);
});

