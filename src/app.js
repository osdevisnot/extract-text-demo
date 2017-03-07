console.log('this is app.js');

require.ensure([], require => {
  require('./a.css');
}, 'base');

require.ensure([], require => {
  require('./b.css');
}, 'first');

require.ensure([], require => {
  require('./c.css');
}, 'second');

