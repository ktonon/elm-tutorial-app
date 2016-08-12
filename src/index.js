'use strict';

require('ace-css/css/ace.css');
require('font-awesome/css/font-awesome.css');

// Require index.html so it gets copied to dist
require('./index.html');

const Elm = require('./Main.elm');

const mountNode = document.getElementById('main');


// The third value on embed are the initial values
// for incoming ports into Elm
Elm.Main.embed(mountNode);
