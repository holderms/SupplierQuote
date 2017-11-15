//From helloHandlebars
var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
//Post info
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 14768);

//From lecture; Send data to get or postRes view & display as a list
app.get('/index.html',function(req,res){
  var qParams = [];
  for (var p in req.query){
    qParams.push({'name':p,'value':req.query[p]})
  }
  var context = {};
  context.dataList = qParams;
  res.render('getRes', context);
 });


//Pass in body via ARC
app.post('/index.html',function(req,res){
  // var qParams = [];
  // for (var p in req.query){
  //   qParams.push({'name':p,'value':req.query[p]})
  // }
  // var context = {};
  // context.query = qParams;

  var bParams = [];
  for (var b in req.body){
    bParams.push({'name':b,'value':req.body[b]})
  }
  var login = false;
  if(bParams[0].name=="username" && bParams[].value=="employeeTest"){
    if(bParams[1].name=="password" && bParams[1].value=="testpassword"){
      login = true;
      res.sendFile("EnterQuote/index.html");
    }
  } else {
    res.render('loginError', context);
  }
  // console.log(bParams);
  // console.log(req.body);
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
