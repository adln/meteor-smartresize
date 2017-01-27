Package.describe({
  name: 'adln:smartresize',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'JQuery Smartresize for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/adln/meteor-smartresize/tree/master',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.use('jquery', 'client');
  api.mainModule('lib/smartresize.js', 'client');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('adln:smartresize');
  api.mainModule('smartresize-tests.js');
});
