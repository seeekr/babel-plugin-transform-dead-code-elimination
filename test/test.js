import test from 'ava';
import { transformFile } from 'babel-core';
import fs from 'mz/fs';
import { basename, join } from 'path';
import globby from 'globby';

async function transform(name) {
	const optionsPath = join(__dirname, 'actual', `${name}.json`);
	const hasOptions = await fs.exists(optionsPath);
	const options = hasOptions ? require(optionsPath) : {};

	options.plugins = options.plugins || [];
	options.plugins.push(join(__dirname, '../lib/index.js'));
	options.babelrc = false;

	return new Promise((resolve, reject) => {
		transformFile(join(__dirname, 'actual', `${name}.js`), options, (err, result) => {
			err ? reject(err) : resolve(result.code);
		});
	});
}

globby.sync(join(__dirname, 'actual/*.js')).forEach(source => {
	const name = basename(source, '.js');
	test(name, async t => {
		const [expected, transformed] = await Promise.all([
			fs.readFile(join(__dirname, 'expected', `${name}.js`), 'utf8'),
			transform(name)
		]);

		t.is(expected.trim(), transformed.trim());
	});
});
