module.exports = function(app, fs, connection,util,db_query,formidable)
{
    app.get('/',function(req,res){
      res.render('views/index.html');
    });
}
