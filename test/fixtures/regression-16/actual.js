var MAX_INT = 2147483647;
var MIN_INT = -2147483648;
function coerceInt(value) {
	var num = Number(value);
	if (num === num && num <= MAX_INT && num >= MIN_INT) {
		return (num < 0 ? Math.ceil : Math.floor)(num);
	}
	return null;
}

coerceInt();
