$(window).bind("popstate", YT.urls ? YT.urls.onchange : false);
$(function () {
    YT.sharing.bind();
    YT.keyManager.shuffleKeys();
    YT.multisearch.bind();
    YT.query.bind();
    YT.urls && YT.urls.onchange();
    // Meta
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-50190232-9', 'auto');
    ga('send', 'pageview', {
        'page': location.pathname + location.search + location.hash,
        'title': document.title
    });
});
var disqus_config = function () {
    this.page.url = "";
    this.page.identifier = "";
};