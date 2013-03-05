WebFontConfig = {
	google: {
		families: [
			'PT+Sans:400,700:latin,cyrillic',
			'PT+Sans+Narrow:400,700:latin,cyrillic',
			'PT+Mono::latin,cyrillic'
		]
	}
};

(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();

// google analytics

(function () {
	var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-28653731-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
})();

var setupLangTitle = function () {
	$('.sh_sourceCode').each(function (i, e) {
		if ($(e).hasClass('sh_ruby')) {
			$(e).append("<div class=\"lang-type\">ruby</div>")
		}

		if ($(e).hasClass('sh_python')) {
			$(e).append("<div class=\"lang-type\">python</div>")
		}
	});
};

setTimeout(setupLangTitle, 1000);