
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
//app.set('port', 14768);

//From lecture; Send data to get or postRes view & display as a list
app.get('/index.html',function(req,res){
  var params = [];
  for (var b in req.query){
    params.push({'name':b,'value':req.body[b]})
  }
  console.log("in get 1");
  var login = false;
  if(params[0].name=="username" && params[0].value=="employeeTest"){
    if(params[1].name=="password" && params[1].value=="testpassword"){
      login = true;
      res.sendFile("EnterQuote/index.html");
    }
  } else {
    res.render('loginError', context);
  }
 });


 app.get('/index.html',function(req,res){
   var params = [];
   for (var b in req.query){
     params.push({'name':b,'value':req.body[b]})
   }
   console.log("in get 2");
   var login = false;
   if(params[0].name=="username" && params[0].value=="employeeTest"){
     if(params[1].name=="password" && params[1].value=="testpassword"){
       login = true;
       res.sendFile("EnterQuote/index.html");
     }
   } else {
     res.render('loginError', context);
   }
  });
//From lecture
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
