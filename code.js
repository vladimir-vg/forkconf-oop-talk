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

var setupLangTitle = function () {
	$('.sh_sourceCode').each(function (i, e) {
		console.log('hoo')
		if ($(e).hasClass('sh_ruby')) {
			$(e).append("<div class=\"lang-type\">ruby</div>")
		}

		if ($(e).hasClass('sh_python')) {
			$(e).append("<div class=\"lang-type\">python</div>")
		}
	});
};

setTimeout(setupLangTitle, 1000);