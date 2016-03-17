true ? foo() : bar();
false ? bar() : foo();
'hi' ? foo() : bar();
null ? bar() : foo();
'hi' === 'hi' ? foo() : bar();
'hi' === 'bye' ? bar() : foo();
'hi' !== 'hi' ? bar() : foo();
