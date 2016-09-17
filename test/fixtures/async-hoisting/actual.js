(() => {
	return foo();

	async function foo() {
		return bar;
	}
})();
