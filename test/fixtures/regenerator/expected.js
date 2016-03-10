var _marked = [foo].map(regeneratorRuntime.mark);

function foo() {
	return regeneratorRuntime.wrap(function foo$(_context) {
		while (1) switch (_context.prev = _context.next) {
			case 0:
			case "end":
				return _context.stop();
		}
	}, _marked[0], this);
}

function baz() {
	foo();
}

baz();
baz();
