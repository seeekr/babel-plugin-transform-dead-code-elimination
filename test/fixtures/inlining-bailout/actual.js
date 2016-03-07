export function foo() {}
foo();

function bar() {}
for (;;) {
	bar();
}

function recursive() {
	recursive();
}

// arg not inlined
function baz(arg) {
	return arg;
}
baz();

var multipleRefs = 'one';
multipleRefs = 'two';
something(multipleRefs);
