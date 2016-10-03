module.exports = function(app, fs, connection,util,db_query,formidable)
{
  app.get('/',function(req,res){
      res.render('views/index.html');
    });

  app.get('/board', function(req, res)
  {
    res.render('views/board/board.html');
  });

  app.get('/loadpage' function(req, res)
  {
    var pagename = req.query.pagename;

    console.log("page name : " + pagename);

    var url = "/" + pagename + ".html";

    console.log("url : " + url);

    res.render(url);
  });
}
