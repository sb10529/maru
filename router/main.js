module.exports = function(app, fs, connection, util, db_query, formidable,logger)
{
  app.get('/',function(req,res){
      res.render('views/index.html');
    });

  app.get('/board', function(req, res)
  {
    res.render('views/board/board.html');
  });

  app.get('/loadpage', function(req, res)
  {
    var pagename = req.query.pagename;

    console.log("page name : " + pagename);

    var url = "views/board/" + pagename + ".html";

    console.log("url : " + url);


    // DB 가져오기
    var query = util.format(db_query.query.select.maruSelect, "1");

    connection.query(query, function(err, rows)
    {
      var result  = {};


      console.log(result);

      if(rows.length > 0)
      {
        console.log(rows);
      }
      else
      {
        console.log("failed : " + rows);
      }

      res.render(url, rows[0]);
    });
  });
}
