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