const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

User =require('./models/user');


app.use(bodyParser.json());

// Connect to Mongoose
mongoose.connect('mongodb://localhost/nodestudy');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('hello World');
});

app.get('/api/getuser', (req, res) => {
	User.getUser((err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.post('/api/signup', (req, res) => {
	var user = req.body;
	User.addUser(user, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
