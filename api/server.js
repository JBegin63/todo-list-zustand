import express from 'express';
import cors from 'cors';
import json from 'body-parser';
import { nanoid } from 'nanoid';

const app = express();

app.use(cors());
app.use(json());

let todos = [
	{
		id: nanoid(),
		text: 'todo 1',
		completed: true,
	},
	{
		id: nanoid(),
		text: 'todo 2',
		completed: false,
	},
	{
		id: nanoid(),
		text: 'todo 3',
		completed: false,
	},
	{
		id: nanoid(),
		text: 'todo 4',
		completed: true,
	},
	{
		id: nanoid(),
		text: 'todo 5',
		completed: false,
	},
];

app.get('/todos', (req, res) => res.send(todos));

app.post('/todos', (req, res) => {
	const todo = { title: req.body.title, id: nanoid(), completed: false };
	todos.push(todo);
	return res.send(todo);
});

app.patch('/todos/:id', (req, res) => {
	const id = req.params.id;
	const index = todos.findIndex((todo) => todo.id == id);
	const completed = Boolean(req.body.completed);
	if (index > -1) {
		todos[index].completed = completed;
	}
	return res.send(todos[index]);
});

app.delete('/todos/:id', (req, res) => {
	const id = req.params.id;
	const index = todos.findIndex((todo) => todo.id == id);
	if (index > -1) {
		todos.splice(index, 1);
	}

	res.send(todos);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));