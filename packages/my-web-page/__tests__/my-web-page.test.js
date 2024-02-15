'use strict';

const myWebPage = require('..');
const assert = require('assert').strict;

assert.strictEqual(myWebPage(), 'Hello from myWebPage');
console.info('myWebPage tests passed');
