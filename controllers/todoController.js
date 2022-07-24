let data = [{item:"amit"},{item:"sumit"},{item:"sachin"}];

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports= (app) => {

    app.get('/todo',(req,res) => {
        res.render('todo',{todos:data});
    });

    app.post('/todo', urlencodedParser, (req,res) => {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item',(req,res) => {
        console.log(req.params);
        data = data.filter((todo) => todo.item !== req.params.item);
        res.json(data);
    });           
};