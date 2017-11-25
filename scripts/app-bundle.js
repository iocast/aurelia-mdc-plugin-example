define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class App {
    constructor() {
      this.message = 'Hello World!';
    }
  }
  exports.App = App;
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

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.use.plugin('@iocast/aurelia-mdc-plugin');

    aurelia.start().then(() => aurelia.setRoot());
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    //config.globalResources([]);
  }
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <!--\n  <require from=\"material-design-icons/material-icons.css\"></require>\n  -->\n  <require from=\"material-components-web/material-components-web.css\"></require>\n\n  <h1>${message}</h1>\n\n\n  <mdc-chip remove.call=\"removeMe()\" raised=\"true\">\n    <div class=\"mdc-chip-icon\">A</div>\n    <span>This is my chip</span>\n  </mdc-chip>\n\n\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map