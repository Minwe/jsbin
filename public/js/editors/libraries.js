var libraries = [
  {
    'url': '//code.jquery.com/jquery-git.js',
    'label': 'jQuery WIP (via git)',
    'group': 'jQuery'
  },
  {
    'url': '//code.jquery.com/jquery-2.1.4.min.js',
    'label': 'jQuery 2.1.4',
    'group': 'jQuery'
  },
  {
    'url': '//code.jquery.com/jquery-compat-git.js',
    'label': 'jQuery Compat WIP (via git)',
    'group': 'jQuery'
  },
  {
    'url': '//code.jquery.com/jquery-1.11.3.min.js',
    'label': 'jQuery 1.11.3',
    'group': 'jQuery'
  },
  {
    'url': 'http://zeptojs.com/zepto.min.js',
    'label': 'Zepto latest',
    'group': 'Zepto'
  },
  {
    'url': [
      'http://cdn.amazeui.org/amazeui/2.5.0/css/amazeui.min.css',
      '//code.jquery.com/jquery-2.1.4.min.js',
      'http://cdn.amazeui.org/amazeui/2.5.0/js/amazeui.min.js'
    ],
    'label': 'Amaze UI 2.5.0',
    'group': 'Amaze UI'
  },
  {
    'url': [
      'http://cdn.amazeui.org/amazeui/2.5.0/css/amazeui.min.css',
      'http://cdn.amazeui.org/react/0.14.3/react.min.js',
      'http://cdn.amazeui.org/react/0.14.3/react-dom.min.js',
      'http://cdn.amazeui.org/amazeui-react/1.0.0-beta1/amazeui.react.min.js'
    ],
    'label': 'Amaze UI React 1.0.0-beta1',
    'group': 'Amaze UI'
  },
  {
    'url': [
      'http://cdn.amazeui.org/amazeui/1.0.2/css/amazeui.min.css',
      'http://zeptojs.com/zepto.min.js',
      'http://cdn.amazeui.org/amazeui/1.0.2/js/amazeui.min.js'
    ],
    'label': 'Amaze UI 1.0.2',
    'group': 'Amaze UI'
  },

  {
    'url': [
      '//code.jquery.com/jquery.min.js',
      '//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css',
      '//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js'
    ],
    'label': 'Bootstrap Latest',
    'group': 'Bootstrap'
  },
  {
    'url' : [
    'http://cdn.amazeui.org/require.js/2.1.16/require.js',
  ],
    'label': 'RequireJS',
    'group': 'AMD'
  },
/*  {
    'url':'//ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js',
    'label': 'Angular 1.3.2 Stable',
    'group': 'Angular'
  },
  {
    'url': '//ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.js',
    'label': 'Angular 1.3.2 Stable Uncompressed',
    'group': 'Angular'
  },
  {
    'url': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js',
    'label': 'Angular 1.2.26 Legacy',
    'group': 'Angular'
  },*/
  {
    'url': [
      'http://cdn.amazeui.org/react/0.14.3/react.min.js',
      'http://cdn.amazeui.org/react/0.14.3/react-dom.min.js',
    ],
    'label': 'React 0.14.3',
    'group': 'React'
  },
  {
    'url': [
      'http://cdn.amazeui.org/react/0.14.3/react-with-addons.min.js',
    ],
    'label': 'React with Add-Ons 0.14.3',
    'group': 'React'
  },
  {
    'url': 'http://cdn.amazeui.org/bluebird/2.9.25/bluebird.min.js',
    'label': 'Bluebird 2.9.25',
    'group': 'Promises'
  },
  {
    'url': 'https://cdn.amazeui.org/promise/6.1.0/promise-6.1.0.js',
    'label': 'Promise 6.1.0',
    'group': 'Promises'
  },
  {
    'url': 'https://cdn.amazeui.org/rsvp/3.0.17/rsvp.min.js',
    'label': 'RSVP 3.0.17',
    'group': 'Promises'
  },
  {
    'url': [
      'https://rawgithub.com/ai/autoprefixer-rails/master/vendor/autoprefixer.js'
    ],
    'label': 'Autoprefixer',
    'snippet': '<style type="unprocessed" id="AutoprefixerIn">%css%</style>\n<style id="AutoprefixerOut"></style>\n<script>\nAutoprefixerSettings = ""; //Specify here the browsers you want to target or leave empty\ndocument.getElementById("AutoprefixerOut").innerHTML = autoprefixer(AutoprefixerSettings || null).process(document.getElementById("AutoprefixerIn").innerHTML).css;\n</script>'
  },
  {
    'url': [
      '//jashkenas.github.io/underscore/underscore-min.js',
      '//jashkenas.github.io/backbone/backbone-min.js'
    ],
    'label': 'Backbone latest'
  },
  {
    'url': '//jashkenas.github.io/coffee-script/extras/coffee-script.js',
    'label': 'CoffeeScript'
  },
  {
    'url': [
      'http://code.jquery.com/jquery-2.1.3.min.js',
      'http://cdn.amazeui.org/handlebars/3.0.0/handlebars.min.js',
      'http://cdn.amazeui.org/ember/1.10.0/ember.min.js'
    ],
    'label': 'Ember.js 1.10.0'
  },
  {
    'url': 'http://cdn.amazeui.org/es5-shim/4.1.0/es5-shim.min.js',
    'label': 'ES5 shim 4.1.0'
  },
  {
    'url': [
      'http://cdn.amazeui.org/foundation/5.5.1/css/normalize.css',
      'http://cdn.amazeui.org/foundation/5.0.3/css/foundation.css',
      'http://code.jquery.com/jquery-2.1.3.min.js',
      'http://cdn.amazeui.org/foundation/5.0.3/js/foundation.min.js'
    ],
    'label': 'Foundation 5.5.1'
  },
  {
    'url': 'http://cdn.amazeui.org/handlebars/3.0.0/handlebars.min.js',
    'label': 'Handlebars.js 3.0.0'
  },
  {
    'url': 'http://cdn.amazeui.org/less/2.4.0/less.min.js',
    'label': 'Less 2.4.0'
  },
  {
    'url': 'http://cdn.amazeui.org/lodash/3.5.0/lodash.min.js',
    'label': 'lodash 3.5.0'
  },
  {
    'url': 'http://cdn.amazeui.org/modernizr/2.8.3/modernizr.js',
    'label': 'Modernizr 2.8.3'
  },
  {
    'url': [
      'http://cdn.amazeui.org/modernizr/2.8.3/modernizr.js',
      'http://cdn.amazeui.org/detectizr/2.0.0/detectizr.min.js'
    ],
    'label': 'Detectizr 2.0.0'
  },
  {
    'url': 'http://cdn.amazeui.org/raphael/2.1.4/raphael-min.js',
    'label': 'Rapha&euml;l 2.1.4'
  },
  {
    'url': 'http://cdn.amazeui.org/underscore/1.8.2/underscore-min.js',
    'label': 'underscore 1.8.2'
  },
  {
    'url':[
      'http://cdn.amazeui.org/html5shiv/3.7.2/html5shiv.js'
    ],
    'label': 'HTML5 shiv'
  },
  {
    'url': 'http://cdn.amazeui.org/font-awesome/4.3.0/css/font-awesome.min.css',
    'label': 'Font Awesome 4.3.0'
  },
  {
    'url': [
      'http://cdn.amazeui.org/video.js/4.12.5/video-js.css',
      'http://cdn.amazeui.org/video.js/4.12.5/video.js'
    ],
    'label': 'Video.js 4.12.5'
  },
  {
    'url': '//cdn.firebase.com/js/client/2.2.2/firebase.js',
    'label': 'Firebase 2.2.2'
  },
  {
    'url': '//www.parsecdn.com/js/parse-1.3.5.min.js',
    'label': 'Parse 1.3.5'
  }
];

window.libraries = libraries; // expose a command line API

libraries.userSpecified = JSON.parse(store.localStorage.getItem('libraries') || '[]');
for (var i = 0; i < libraries.userSpecified.length; i++) {
  libraries.push(libraries.userSpecified[i]);
}

libraries.add = function (lib) {
  // Extract each script from a list (as documented) or use the default way
  if (lib.scripts) {
    lib.scripts.forEach(function (script) {
      script.group = lib.text;
      script.label = script.text;
      libraries.userSpecified.push(script);
      libraries.push(script);
    });
  } else {
    // Adding a lib according to the above schema
    lib.group = 'Custom';
    libraries.userSpecified.push(lib);
    libraries.push(lib);
  }
  try {
    store.localStorage.setItem('libraries', JSON.stringify(this.userSpecified));
  } catch (e) {} // just in case of DOM_22 error, makes me so sad to use this :(
  $('#library').trigger('init');
};

libraries.clear = function () {
  libraries.userSpecified = [];
  store.localStorage.removeItem('libraries');
  var length = libraries.length;
  for (var i = 0; i < length; i++) {
    if (libraries[i].group === 'Custom') {
      libraries.splice(i, 1);
      length--;
    }
  }
  // force a refresh?
  $('#library').trigger('init');
};
