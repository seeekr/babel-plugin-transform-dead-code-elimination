(function() {
	// used twice to ensure `local` isn't inlined
	local();
	return local();

	var foo = bar();
	baz();

	function local() {}
})();
