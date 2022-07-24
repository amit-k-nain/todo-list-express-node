const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const urlencodedParser = bodyParser.urlencoded({extended:false});
app.set('view engine', 'ejs');

app.use('/assets',express.static('assets'));

app.get('/',(req,res)=>{
//    res.send('Home page');
   res.sendFile(__dirname+'/old_node_practice_file/index.html');
});

// app.get('/about',(req,res)=>{
//     // res.send('About page');
//     res.sendFile(__dirname+'/old_node_practice_file/about.html');
// });

res.render('about',{qs:req.query});
    app.post('/about', urlencodedParser, (req,res)=>{
    res.render('about-success',{data:req.body});
});

app.get('/profile/:name',(req,res)=>{
    const data = {
        name : req.params.name,
        age: req.params.name.length*3,
        occ: "Developer",
        friends: ['sarah','jane','willma']

    };
    res.render('person',data);
    // res.send('Profile name is '+req.params.name);
    // res.sendFile(_dirname+'/old_node_practice_file/about.html');
});
app.listen(3000);