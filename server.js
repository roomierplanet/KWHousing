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
        const {name, address, rent_corp, img_url} = req.body;
        if (!name || !address || !rent_corp || !img_url) {
            throw new Error('Incomplete information provided!');
        }
        await db.query('INSERT INTO properties(name, address, rent_corp, img_url) VALUES($1, $2, $3, $4)', [name, address, rent_corp, img_url]);
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
        const {name, address, rent_corp, img_url} = req.body;
        const results = await db.query('UPDATE properties SET name = $1, address = $2, rent_corp = $3, img_url = $4 WHERE id = $5', [name, address, rent_corp, img_url, id]);
        if (!name || !address || !rent_corp || !img_url) throw new Error('Wrong information provided');
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

const Reviews = express.Router();

app.use('/api/v1/reviews', Reviews);

Reviews.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM reviews');
        const {rows} = result;
        res.status(200).json({
            status: 'success',
            results: rows.length,
            data: {
                reviews: rows
            }
        }); 
    } catch(err) {
        res.status(404).send(err.message);
    }
})

Reviews.get('/:property_id', async (req, res) => {
    try {
        const {property_id} = req.params;
        const results = await db.query('SELECT * FROM reviews WHERE property_id = $1', [property_id]);
        const {rows} = results;
        if (results.rowCount === 0) {
            throw new Error('This review cannot be retrieved!');
        }
        res.status(200).json({
            status: "success",
            results: rows.length,
            data: {
                reviews: rows
            }
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
});

Reviews.post('/', async (req, res) => {
    try {
        const {name, rating, review, property_id} = req.body;
        if (!name || !rating || !property_id) throw new Error('Incomplete/Invalid information provided');
        if (!review) {
            await db.query('INSERT INTO reviews(name, rating, property_id) VALUES($1, $2, $3)', [name, rating, property_id]);
        } else {
            await db.query('INSERT INTO reviews(name, rating, review, property_id) VALUES($1, $2, $3, $4)', [name, rating, review, property_id]);
        }
        res.status(200).json({
            status: "success"
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
})

app.listen(port, () => {
    console.log('Server listening on port '+ port);
});

