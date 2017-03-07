define('app',['exports'], function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var App = exports.App = function () {
      function App() {
         _classCallCheck(this, App);
      }

      App.prototype.configureRouter = function configureRouter(config, router) {
         config.title = 'Aurelia';

         config.map([{ route: '', name: 'home', moduleId: './components/home/home', nav: true, title: 'Home' }, { route: 'about', name: 'about',
            moduleId: './components/about/about', nav: true, title: 'About' }]);

         this.router = router;
      };

      return App;
   }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('components/about/about',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var About = exports.About = function About() {
    _classCallCheck(this, About);
  };
});
define('components/home/home',['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Home = exports.Home = function () {
		function Home() {
			_classCallCheck(this, Home);

			this.message = 'Hello World!';
			this.name = '';
		}

		Home.prototype.greeting = function greeting() {
			alert(' Hi ' + this.name + ' ');
		};

		return Home;
	}();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><ul><li repeat.for=\"row of router.navigation\"><a href.bind=\"row.href\">${row.title}</a></li><router-view></router-view></ul></template>"; });
define('text!components/about/about.html', ['module'], function(module) { module.exports = "<template><h1>ABOUT</h1></template>"; });
define('text!components/home/home.html', ['module'], function(module) { module.exports = "<template><h1>HOME</h1><h2>${message}</h2><input value.bind=\"name\"> <button click.delegate=\"greeting()\">Greet!</button></template>"; });
//# sourceMappingURL=app-bundle.js.map