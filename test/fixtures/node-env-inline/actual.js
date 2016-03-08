process.env.NODE_ENV === 'this will never be equal' ? foo() : bar();

if (process.env.NODE_ENV === 'neither will this') {
	baz();
} else {
	foobar();
}
