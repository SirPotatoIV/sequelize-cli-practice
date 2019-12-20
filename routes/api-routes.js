const db = require("../models")

module.exports = function(app){
    // use app to setup api routes

    //route to create a todo
    app.post("/api/todo/", async function(req, res){
        const todo = await db.Todo.create({task: req.body.task})
        res.json(todo);
    });

    app.get("/api/todo", (req,res)=> {
        db.Todo.findAll({}).then(todos => {
            res.json(todos)
        })
    })
}