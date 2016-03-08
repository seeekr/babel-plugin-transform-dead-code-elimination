var foo = function bar() {}();

var baz = new class Foo {}();

(function () {
	return function local() {}(1);
})();
