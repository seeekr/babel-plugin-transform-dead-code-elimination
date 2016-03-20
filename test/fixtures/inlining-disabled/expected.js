var foo = bar();
function bar() {}

var baz = new Foo();
class Foo {}

(() => {
	var foo = 1;
	return local(foo);
	function local() {}
})();
