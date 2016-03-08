function foo() {}
function bar() {
	baz();
	foo = 5;
}
function foobar() {}
// used twice to avoid inlining
foobar();
foobar();
