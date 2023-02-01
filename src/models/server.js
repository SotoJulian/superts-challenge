import express from 'express';
import bodyParser from 'body-parser';
const client = require('../database/connectdb.ts');
app.use(bodyParser.json());

const app = express();

app.get('/users', async (req, res) => {
	try {
		const itemsCollection = client.db('usuarios').collection('users');
		const items = await itemsCollection.find({}).toArray();
		res.json(items);
	} catch (err) {
		res.status(500).json({message: err.message});
	}
});

app.post('/signup', async (req, res) => {
	try {
		await client.connect();
		const itemsCollection = client.db('test').collection('items');
		const item = req.body;
		await itemsCollection.insertOne(item);
		res.json({message: 'Item added successfully'});
	} catch (err) {
		res.status(500).json({message: err.message});
	}
});

app.listen(3000, () => {
	console.log('Server started on http://localhost:3000');
});
