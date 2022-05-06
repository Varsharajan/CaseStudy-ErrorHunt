const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
//Part#1 point2 - bodyparser not imported.
const bodyParser = require('body-parser');
const port = process.env.PORT || 3066;

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');//Part#1 Point3 - spelling issue.proper file name is homerouter.
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express(); 
//Part#2 Point 7 - for setting cross origin resource sharing
app.use(cors({origin:['https://www.section.io','https://www.google.com/']}));
app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});




//Part#1 point5 - Port no were not defined

app.listen(port,()=>{
    console.log(`server ready on port-no ${Port}`);
});