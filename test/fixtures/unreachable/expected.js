(function () {
	// used twice to ensure `local` isn't inlined
	local();
	return local();
	function local() {}
})();
