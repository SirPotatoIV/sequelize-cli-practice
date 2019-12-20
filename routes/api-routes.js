module.exports = function(app){
    // use app to setup api routes

    //route to create a todo
    app.post("/api/todo/", function(req, res){
        const todo = db.Todo.create({task: req.body.task})
        res.json(todo);
    })
}