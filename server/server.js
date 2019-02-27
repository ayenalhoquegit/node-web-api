const express 	 = require('express');
const bodyParser = require('body-parser');

const {ObjectId} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {todos}	 = require('./models/todos');
const {users}	 = require('./models/users');

const app 		 = express();
app.use(bodyParser.json());

app.post('/todos', (req, res)=>{

	let newTodo = new todos({	
		text : req.body.text,
		completed:req.body.completed,
		completedAt:req.body.completedAt
	});

	newTodo.save().then((doc)=>{
		res.send(doc);
		console.log(doc)
	}, (e)=>{
		res.status(400).send(e);
	})

	
});

app.get('/todos', (req, res) =>{
	todos.find().then((doc) =>{
		res.send(doc);
		console.log(doc)
	}, (e) =>{
		res.status(400).send(e);
	})
});

// GET /todos/1254
app.get('/todos/:id',  (req, res)=>{
	let id = req.params.id;
	
	if(!ObjectId.isValid(id)){
		return res.status(404).send();
	}
	todos.findById(id).then((doc)=>{
		res.send(doc)
	}, (e) =>{
		res.status(404).send();	
	});

});




app.listen(3000, ()=>{
	console.log('server is running port 3000')
});