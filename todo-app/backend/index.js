const express = require('express');
const { createTodo } = require('./types');
const app = express();

app.use(express.json());

app.post('/todo', (req, res) => {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);

    if(!parsedPayLoad.success) {
        req.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    //put it in mongodb
})

app.get('/todo', (req, res) => {

})

app.put('/completed', (req, res) => {

})

app.listen(3000, () => {
    console.log("app running on port 3000");
})