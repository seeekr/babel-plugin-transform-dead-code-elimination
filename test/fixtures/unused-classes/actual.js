class Foo {}
class Bar {
	baz() {}
	foo() {
		foo = 5;
	}
}
class Foobar {}
// used twice to avoid inlining
new Foobar();
new Foobar();
