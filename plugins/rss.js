var Watcher = require('rss-watcher');
//feed = 'http://leopard-raws.org/rss.php'
feed = 'https://newtalk.tw/rss/opinion_news'
watcher = new Watcher(feed);
watcher.on('new article', function (article) {
    console.log(article.title);
});

watcher.run(function (err, articles) {
    if(err) {
        console.log(err);
    }
    else {
        articles.forEach(function(article) {
            console.log(article.title);
        });
    }
});
