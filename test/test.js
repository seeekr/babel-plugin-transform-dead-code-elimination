import test from 'ava';
import { transformFile } from 'babel-core';
import fs from 'mz/fs';
import path from 'path';
import globby from 'globby';

async function transform(name) {
	const optionsPath = path.join(__dirname, 'actual', `${name}.json`);
	const hasOptions = await fs.exists(optionsPath);
	const options = hasOptions ? require(optionsPath) : {};

	options.plugins = options.plugins || [];
	options.plugins.push(path.join(__dirname, '../lib/index.js'));
	options.babelrc = false;

	return new Promise((resolve, reject) => {
		transformFile(path.join(__dirname, 'actual', `${name}.js`), options, (err, result) => {
			err ? reject(err) : resolve(result.code);
		});
	});
}

function normalize(string) {
	// replace multiple newlines with one, normalize to unix line endings
	return string.trim().replace(/[\r\n]+/g, '\n');
}

globby.sync(path.join(__dirname, 'actual/*.js')).forEach(source => {
	const name = path.basename(path.resolve(__dirname, 'actual', source), '.js');
	test(name, async t => {
		let [expected, transformed] = (await Promise.all([
			fs.readFile(path.join(__dirname, 'expected', `${name}.js`), 'utf8'),
			transform(name)
		])).map(normalize);

		t.is(expected, transformed);
	});
});
