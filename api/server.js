const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://kjagannath3:9vtrn--SQ529@todo-app.zbblqx9.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to DB"))
.catch(console.error);


const Todo = require('./models/Todo')

app.get('/todos', async(req, res) => {
    const todos = await Todo.find();

    res.json(todos);
})

app.post('/todos/new', (req, res) => {
    const todo = new Todo({
        text: req.body.text,
    });
    res.status(201)
    todo.save();
    
    res.json(todo);
    
})
   
 
app.listen(3001, () => console.log("Server started on port 3001"));