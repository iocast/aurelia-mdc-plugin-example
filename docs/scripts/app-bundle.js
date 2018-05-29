define('routes',['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.routes = undefined;
    var routes = exports.routes = [{
        route: ['', 'welcome', 'home', 'index'],
        name: 'landing',
        moduleId: _aureliaPal.PLATFORM.moduleName('./landing'),
        nav: false,
        title: 'Welcome'
    }, {
        route: 'components',
        name: 'components',
        moduleId: _aureliaPal.PLATFORM.moduleName('./components/index'),
        nav: false,
        title: 'Components'
    }];
});
define('router-config',['exports', 'aurelia-pal', 'aurelia-framework', 'aurelia-router', './routes'], function (exports, _aureliaPal, _aureliaFramework, _aureliaRouter, _routes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var _default = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
    function _default(router) {
      _classCallCheck(this, _default);

      this.router = router;
    }

    _default.prototype.configure = function configure() {
      var appRouterConfig = function appRouterConfig(config) {

        config.map([].concat(_routes.routes));


        config.fallbackRoute('');
      };

      this.router.configure(appRouterConfig);
    };

    return _default;
  }()) || _class);

  exports.default = _default;
});
define('resources/index',['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;
    function configure(config) {
        config.globalResources([_aureliaPal.PLATFORM.moduleName('./elements/au-code'), _aureliaPal.PLATFORM.moduleName('./elements/code-tabs'), _aureliaPal.PLATFORM.moduleName('./elements/template-content')]);
    }
});
define('resources/elements/template-content',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var TemplateContent = exports.TemplateContent = function TemplateContent() {
    _classCallCheck(this, TemplateContent);
  };
});
define('text!resources/elements/template-content.html', ['module'], function(module) { module.exports = "<template>\n\n    <h1>slot test</h1>\n\n    <div class=\"template-content mdc-elevation--z2 bg--white\">\n\n        <slot></slot>\n    </div>\n\n\n</template>\n"; });
define('resources/elements/code-tabs',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CodeTabs = exports.CodeTabs = function () {
        function CodeTabs() {
            _classCallCheck(this, CodeTabs);
        }

        CodeTabs.prototype.attached = function attached() {
            var _this = this;

            this.codeTabBar.MDCTabBar.tabs.forEach(function (tab) {
                tab.preventDefaultOnClick = true;
            });

            this.codeTabBar.MDCTabBar.listen('MDCTabBar:change', function (_ref) {
                var tabs = _ref.detail;

                _this.updateTab(tabs.activeTabIndex);
            });
        };

        CodeTabs.prototype.updateTab = function updateTab(idx) {
            var activePanel = this.codePanels.querySelector('.code-tab-panel.active');

            if (activePanel) activePanel.classList.remove('active');
            var newActivePanel = this.codePanels.querySelector('.code-tab-panel:nth-child(' + (idx + 1) + ')');
            if (newActivePanel) newActivePanel.classList.add('active');
        };

        return CodeTabs;
    }();
});
define('text!resources/elements/code-tabs.html', ['module'], function(module) { module.exports = "<template>\n\n    <require from=\"./code-tabs.css\"></require>\n\n    <div class=\"\">\n        <nav ref=\"codeTabBar\" class=\"mdc-tab-bar\" role=\"tablist\">\n            <a role=\"tab\" aria-controls=\"code-tab-view\" class=\"mdc-tab mdc-tab--active\" href=\"#code-tab-view\">View</a>\n            <a role=\"tab\" aria-controls=\"code-tab-model\" class=\"mdc-tab\" href=\"#code-tab-model\">Model</a>\n            <a role=\"tab\" aria-controls=\"code-tab-style\" class=\"mdc-tab\"  href=\"#code-tab-style\">CSS</a>\n            <span class=\"mdc-tab-bar__indicator\"></span>\n        </nav>\n    </div>\n\n    <section>\n        <div ref=\"codePanels\" class=\"code-tab-panels\">\n            <div class=\"code-tab-panel active\" id=\"code-tab-view\" role=\"tabpanel\" aria-hidden=\"false\">\n                <template replaceable part=\"tab-view-template\"></template>\n            </div>\n            <div class=\"code-tab-panel\" id=\"code-tab-model\" role=\"tabpanel\" aria-hidden=\"true\">\n                <template replaceable part=\"tab-model-template\"></template>\n            </div>\n            <div class=\"code-tab-panel\" id=\"code-tab-style\" role=\"tabpanel\" aria-hidden=\"true\">\n                <template replaceable part=\"tab-style-template\"></template>\n            </div>\n        </div>\n    </section>\n\n</template>\n"; });
define('text!resources/elements/code-tabs.css', ['module'], function(module) { module.exports = ".code-tab-panel {\n    display: none;\n}\n\n.code-tab-panel.active {\n    display: block;\n}\n"; });
define('resources/elements/au-code',['exports', 'aurelia-framework', 'prismjs'], function (exports, _aureliaFramework, _prismjs) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AuCode = undefined;

    var Prism = _interopRequireWildcard(_prismjs);

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};

            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }

            newObj.default = obj;
            return newObj;
        }
    }

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor;

    var AuCode = exports.AuCode = (_dec = (0, _aureliaFramework.processContent)(function (compiler, resources, element, instruction) {
        parseCode(element, resources, instruction);
        return true;
    }), _dec2 = (0, _aureliaFramework.customElement)('au-code'), _dec3 = (0, _aureliaFramework.noView)(['prismjs/themes/prism.css']), _dec4 = (0, _aureliaFramework.inject)(Element, _aureliaFramework.TargetInstruction), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = function () {
        function AuCode(element, targetInstruction) {
            _classCallCheck(this, AuCode);

            _initDefineProp(this, 'language', _descriptor, this);

            this.element = element;
            this.html = targetInstruction.behaviorInstructions[0].html;
        }

        AuCode.prototype.attached = function attached() {
            while (this.element.firstChild) {
                this.element.removeChild(this.element.firstChild);
            }
            var pre = document.createElement('pre');
            pre.style.overflow = 'auto';
            this.element.appendChild(pre);
            pre.innerHTML = Prism.highlight(this.html, Prism.languages[this.language]);
        };

        return AuCode;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'language', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class) || _class) || _class) || _class);


    function parseCode(element, resources, instruction) {
        instruction.html = dedent(decodeHtml(element.innerHTML));
    }

    function decodeHtml(html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    }

    function dedent(str) {
        var match = str.match(/^[ \t]*(?=\S)/gm);
        if (!match) return str;

        var indent = Math.min.apply(Math, match.map(function (el) {
            return el.length;
        }));

        var re = new RegExp('^[ \\t]{' + indent + '}', 'gm');
        return indent > 0 ? str.replace(re, '') : str;
    }
});
define('main',['exports', 'aurelia-pal', 'aurelia-i18n', 'i18next-xhr-backend', './environment', 'intl'], function (exports, _aureliaPal, _aureliaI18n, _i18nextXhrBackend, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

    var _environment2 = _interopRequireDefault(_environment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    if (!('formatToParts' in Intl.DateTimeFormat.prototype)) {
        Intl = IntlPolyfill;
    }

    function configure(aurelia) {
        aurelia.use.standardConfiguration().feature(_aureliaPal.PLATFORM.moduleName('resources'));

        if (_environment2.default.debug) {
            aurelia.use.developmentLogging();
        }

        if (_environment2.default.testing) {
            aurelia.use.plugin(_aureliaPal.PLATFORM.moduleName('aurelia-testing'));
        }

        aurelia.use.plugin(_aureliaPal.PLATFORM.moduleName('aurelia-i18n'), function (instance) {
            var aliases = ['t', 'i18n'];

            _aureliaI18n.TCustomAttribute.configureAliases(aliases);

            instance.i18next.use(_i18nextXhrBackend2.default);

            return instance.setup({
                backend: {
                    loadPath: './locales/{{lng}}/{{ns}}.json' },
                attributes: aliases,
                lng: 'de',
                fallbackLng: 'en',
                debug: false
            });
        });

        aurelia.use.plugin(_aureliaPal.PLATFORM.moduleName('@iocast/aurelia-mdc-plugin'));

        aurelia.start().then(function () {
            return aurelia.setRoot();
        });
    }
});
define('landing',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Landing = exports.Landing = function Landing() {
        _classCallCheck(this, Landing);
    };
});
define('text!landing.html', ['module'], function(module) { module.exports = "<template>\n\n    <h1>under construction</h1>\n\n    <section>\n        <h1>Installation</h1>\n    </section>\n\n    <section>\n        <h1>Configuration</h1>\n    </section>\n\n    <section>\n        <h1>Usage</h1>\n    </section>\n</template>\n"; });
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
define('text!countries.json',[],function () { return '[\n  {\n    "name": "Afghanistan",\n    "code": "AF"\n  },\n  {\n    "name": "Åland Islands",\n    "code": "AX"\n  },\n  {\n    "name": "Albania",\n    "code": "AL"\n  },\n  {\n    "name": "Algeria",\n    "code": "DZ"\n  },\n  {\n    "name": "American Samoa",\n    "code": "AS"\n  },\n  {\n    "name": "AndorrA",\n    "code": "AD"\n  },\n  {\n    "name": "Angola",\n    "code": "AO"\n  },\n  {\n    "name": "Anguilla",\n    "code": "AI"\n  },\n  {\n    "name": "Antarctica",\n    "code": "AQ"\n  },\n  {\n    "name": "Antigua and Barbuda",\n    "code": "AG"\n  },\n  {\n    "name": "Argentina",\n    "code": "AR"\n  },\n  {\n    "name": "Armenia",\n    "code": "AM"\n  },\n  {\n    "name": "Aruba",\n    "code": "AW"\n  },\n  {\n    "name": "Australia",\n    "code": "AU"\n  },\n  {\n    "name": "Austria",\n    "code": "AT"\n  },\n  {\n    "name": "Azerbaijan",\n    "code": "AZ"\n  },\n  {\n    "name": "Bahamas",\n    "code": "BS"\n  },\n  {\n    "name": "Bahrain",\n    "code": "BH"\n  },\n  {\n    "name": "Bangladesh",\n    "code": "BD"\n  },\n  {\n    "name": "Barbados",\n    "code": "BB"\n  },\n  {\n    "name": "Belarus",\n    "code": "BY"\n  },\n  {\n    "name": "Belgium",\n    "code": "BE"\n  },\n  {\n    "name": "Belize",\n    "code": "BZ"\n  },\n  {\n    "name": "Benin",\n    "code": "BJ"\n  },\n  {\n    "name": "Bermuda",\n    "code": "BM"\n  },\n  {\n    "name": "Bhutan",\n    "code": "BT"\n  },\n  {\n    "name": "Bolivia",\n    "code": "BO"\n  },\n  {\n    "name": "Bosnia and Herzegovina",\n    "code": "BA"\n  },\n  {\n    "name": "Botswana",\n    "code": "BW"\n  },\n  {\n    "name": "Bouvet Island",\n    "code": "BV"\n  },\n  {\n    "name": "Brazil",\n    "code": "BR"\n  },\n  {\n    "name": "British Indian Ocean Territory",\n    "code": "IO"\n  },\n  {\n    "name": "Brunei Darussalam",\n    "code": "BN"\n  },\n  {\n    "name": "Bulgaria",\n    "code": "BG"\n  },\n  {\n    "name": "Burkina Faso",\n    "code": "BF"\n  },\n  {\n    "name": "Burundi",\n    "code": "BI"\n  },\n  {\n    "name": "Cambodia",\n    "code": "KH"\n  },\n  {\n    "name": "Cameroon",\n    "code": "CM"\n  },\n  {\n    "name": "Canada",\n    "code": "CA"\n  },\n  {\n    "name": "Cape Verde",\n    "code": "CV"\n  },\n  {\n    "name": "Cayman Islands",\n    "code": "KY"\n  },\n  {\n    "name": "Central African Republic",\n    "code": "CF"\n  },\n  {\n    "name": "Chad",\n    "code": "TD"\n  },\n  {\n    "name": "Chile",\n    "code": "CL"\n  },\n  {\n    "name": "China",\n    "code": "CN"\n  },\n  {\n    "name": "Christmas Island",\n    "code": "CX"\n  },\n  {\n    "name": "Cocos (Keeling) Islands",\n    "code": "CC"\n  },\n  {\n    "name": "Colombia",\n    "code": "CO"\n  },\n  {\n    "name": "Comoros",\n    "code": "KM"\n  },\n  {\n    "name": "Congo",\n    "code": "CG"\n  },\n  {\n    "name": "Congo, The Democratic Republic of the",\n    "code": "CD"\n  },\n  {\n    "name": "Cook Islands",\n    "code": "CK"\n  },\n  {\n    "name": "Costa Rica",\n    "code": "CR"\n  },\n  {\n    "name": "Cote D\\"Ivoire",\n    "code": "CI"\n  },\n  {\n    "name": "Croatia",\n    "code": "HR"\n  },\n  {\n    "name": "Cuba",\n    "code": "CU"\n  },\n  {\n    "name": "Cyprus",\n    "code": "CY"\n  },\n  {\n    "name": "Czech Republic",\n    "code": "CZ"\n  },\n  {\n    "name": "Denmark",\n    "code": "DK"\n  },\n  {\n    "name": "Djibouti",\n    "code": "DJ"\n  },\n  {\n    "name": "Dominica",\n    "code": "DM"\n  },\n  {\n    "name": "Dominican Republic",\n    "code": "DO"\n  },\n  {\n    "name": "Ecuador",\n    "code": "EC"\n  },\n  {\n    "name": "Egypt",\n    "code": "EG"\n  },\n  {\n    "name": "El Salvador",\n    "code": "SV"\n  },\n  {\n    "name": "Equatorial Guinea",\n    "code": "GQ"\n  },\n  {\n    "name": "Eritrea",\n    "code": "ER"\n  },\n  {\n    "name": "Estonia",\n    "code": "EE"\n  },\n  {\n    "name": "Ethiopia",\n    "code": "ET"\n  },\n  {\n    "name": "Falkland Islands (Malvinas)",\n    "code": "FK"\n  },\n  {\n    "name": "Faroe Islands",\n    "code": "FO"\n  },\n  {\n    "name": "Fiji",\n    "code": "FJ"\n  },\n  {\n    "name": "Finland",\n    "code": "FI"\n  },\n  {\n    "name": "France",\n    "code": "FR"\n  },\n  {\n    "name": "French Guiana",\n    "code": "GF"\n  },\n  {\n    "name": "French Polynesia",\n    "code": "PF"\n  },\n  {\n    "name": "French Southern Territories",\n    "code": "TF"\n  },\n  {\n    "name": "Gabon",\n    "code": "GA"\n  },\n  {\n    "name": "Gambia",\n    "code": "GM"\n  },\n  {\n    "name": "Georgia",\n    "code": "GE"\n  },\n  {\n    "name": "Germany",\n    "code": "DE"\n  },\n  {\n    "name": "Ghana",\n    "code": "GH"\n  },\n  {\n    "name": "Gibraltar",\n    "code": "GI"\n  },\n  {\n    "name": "Greece",\n    "code": "GR"\n  },\n  {\n    "name": "Greenland",\n    "code": "GL"\n  },\n  {\n    "name": "Grenada",\n    "code": "GD"\n  },\n  {\n    "name": "Guadeloupe",\n    "code": "GP"\n  },\n  {\n    "name": "Guam",\n    "code": "GU"\n  },\n  {\n    "name": "Guatemala",\n    "code": "GT"\n  },\n  {\n    "name": "Guernsey",\n    "code": "GG"\n  },\n  {\n    "name": "Guinea",\n    "code": "GN"\n  },\n  {\n    "name": "Guinea-Bissau",\n    "code": "GW"\n  },\n  {\n    "name": "Guyana",\n    "code": "GY"\n  },\n  {\n    "name": "Haiti",\n    "code": "HT"\n  },\n  {\n    "name": "Heard Island and Mcdonald Islands",\n    "code": "HM"\n  },\n  {\n    "name": "Holy See (Vatican City State)",\n    "code": "VA"\n  },\n  {\n    "name": "Honduras",\n    "code": "HN"\n  },\n  {\n    "name": "Hong Kong",\n    "code": "HK"\n  },\n  {\n    "name": "Hungary",\n    "code": "HU"\n  },\n  {\n    "name": "Iceland",\n    "code": "IS"\n  },\n  {\n    "name": "India",\n    "code": "IN"\n  },\n  {\n    "name": "Indonesia",\n    "code": "ID"\n  },\n  {\n    "name": "Iran, Islamic Republic Of",\n    "code": "IR"\n  },\n  {\n    "name": "Iraq",\n    "code": "IQ"\n  },\n  {\n    "name": "Ireland",\n    "code": "IE"\n  },\n  {\n    "name": "Isle of Man",\n    "code": "IM"\n  },\n  {\n    "name": "Israel",\n    "code": "IL"\n  },\n  {\n    "name": "Italy",\n    "code": "IT"\n  },\n  {\n    "name": "Jamaica",\n    "code": "JM"\n  },\n  {\n    "name": "Japan",\n    "code": "JP"\n  },\n  {\n    "name": "Jersey",\n    "code": "JE"\n  },\n  {\n    "name": "Jordan",\n    "code": "JO"\n  },\n  {\n    "name": "Kazakhstan",\n    "code": "KZ"\n  },\n  {\n    "name": "Kenya",\n    "code": "KE"\n  },\n  {\n    "name": "Kiribati",\n    "code": "KI"\n  },\n  {\n    "name": "Korea, Democratic People\'s Republic of",\n    "code": "KP"\n  },\n  {\n    "name": "Korea, Republic of",\n    "code": "KR"\n  },\n  {\n    "name": "Kuwait",\n    "code": "KW"\n  },\n  {\n    "name": "Kyrgyzstan",\n    "code": "KG"\n  },\n  {\n    "name": "Lao People\\"S Democratic Republic",\n    "code": "LA"\n  },\n  {\n    "name": "Latvia",\n    "code": "LV"\n  },\n  {\n    "name": "Lebanon",\n    "code": "LB"\n  },\n  {\n    "name": "Lesotho",\n    "code": "LS"\n  },\n  {\n    "name": "Liberia",\n    "code": "LR"\n  },\n  {\n    "name": "Libyan Arab Jamahiriya",\n    "code": "LY"\n  },\n  {\n    "name": "Liechtenstein",\n    "code": "LI"\n  },\n  {\n    "name": "Lithuania",\n    "code": "LT"\n  },\n  {\n    "name": "Luxembourg",\n    "code": "LU"\n  },\n  {\n    "name": "Macao",\n    "code": "MO"\n  },\n  {\n    "name": "Macedonia, The Former Yugoslav Republic of",\n    "code": "MK"\n  },\n  {\n    "name": "Madagascar",\n    "code": "MG"\n  },\n  {\n    "name": "Malawi",\n    "code": "MW"\n  },\n  {\n    "name": "Malaysia",\n    "code": "MY"\n  },\n  {\n    "name": "Maldives",\n    "code": "MV"\n  },\n  {\n    "name": "Mali",\n    "code": "ML"\n  },\n  {\n    "name": "Malta",\n    "code": "MT"\n  },\n  {\n    "name": "Marshall Islands",\n    "code": "MH"\n  },\n  {\n    "name": "Martinique",\n    "code": "MQ"\n  },\n  {\n    "name": "Mauritania",\n    "code": "MR"\n  },\n  {\n    "name": "Mauritius",\n    "code": "MU"\n  },\n  {\n    "name": "Mayotte",\n    "code": "YT"\n  },\n  {\n    "name": "Mexico",\n    "code": "MX"\n  },\n  {\n    "name": "Micronesia, Federated States of",\n    "code": "FM"\n  },\n  {\n    "name": "Moldova, Republic of",\n    "code": "MD"\n  },\n  {\n    "name": "Monaco",\n    "code": "MC"\n  },\n  {\n    "name": "Mongolia",\n    "code": "MN"\n  },\n  {\n    "name": "Montserrat",\n    "code": "MS"\n  },\n  {\n    "name": "Morocco",\n    "code": "MA"\n  },\n  {\n    "name": "Mozambique",\n    "code": "MZ"\n  },\n  {\n    "name": "Myanmar",\n    "code": "MM"\n  },\n  {\n    "name": "Namibia",\n    "code": "NA"\n  },\n  {\n    "name": "Nauru",\n    "code": "NR"\n  },\n  {\n    "name": "Nepal",\n    "code": "NP"\n  },\n  {\n    "name": "Netherlands",\n    "code": "NL"\n  },\n  {\n    "name": "Netherlands Antilles",\n    "code": "AN"\n  },\n  {\n    "name": "New Caledonia",\n    "code": "NC"\n  },\n  {\n    "name": "New Zealand",\n    "code": "NZ"\n  },\n  {\n    "name": "Nicaragua",\n    "code": "NI"\n  },\n  {\n    "name": "Niger",\n    "code": "NE"\n  },\n  {\n    "name": "Nigeria",\n    "code": "NG"\n  },\n  {\n    "name": "Niue",\n    "code": "NU"\n  },\n  {\n    "name": "Norfolk Island",\n    "code": "NF"\n  },\n  {\n    "name": "Northern Mariana Islands",\n    "code": "MP"\n  },\n  {\n    "name": "Norway",\n    "code": "NO"\n  },\n  {\n    "name": "Oman",\n    "code": "OM"\n  },\n  {\n    "name": "Pakistan",\n    "code": "PK"\n  },\n  {\n    "name": "Palau",\n    "code": "PW"\n  },\n  {\n    "name": "Palestinian Territory, Occupied",\n    "code": "PS"\n  },\n  {\n    "name": "Panama",\n    "code": "PA"\n  },\n  {\n    "name": "Papua New Guinea",\n    "code": "PG"\n  },\n  {\n    "name": "Paraguay",\n    "code": "PY"\n  },\n  {\n    "name": "Peru",\n    "code": "PE"\n  },\n  {\n    "name": "Philippines",\n    "code": "PH"\n  },\n  {\n    "name": "Pitcairn",\n    "code": "PN"\n  },\n  {\n    "name": "Poland",\n    "code": "PL"\n  },\n  {\n    "name": "Portugal",\n    "code": "PT"\n  },\n  {\n    "name": "Puerto Rico",\n    "code": "PR"\n  },\n  {\n    "name": "Qatar",\n    "code": "QA"\n  },\n  {\n    "name": "Reunion",\n    "code": "RE"\n  },\n  {\n    "name": "Romania",\n    "code": "RO"\n  },\n  {\n    "name": "Russian Federation",\n    "code": "RU"\n  },\n  {\n    "name": "RWANDA",\n    "code": "RW"\n  },\n  {\n    "name": "Saint Helena",\n    "code": "SH"\n  },\n  {\n    "name": "Saint Kitts and Nevis",\n    "code": "KN"\n  },\n  {\n    "name": "Saint Lucia",\n    "code": "LC"\n  },\n  {\n    "name": "Saint Pierre and Miquelon",\n    "code": "PM"\n  },\n  {\n    "name": "Saint Vincent and the Grenadines",\n    "code": "VC"\n  },\n  {\n    "name": "Samoa",\n    "code": "WS"\n  },\n  {\n    "name": "San Marino",\n    "code": "SM"\n  },\n  {\n    "name": "Sao Tome and Principe",\n    "code": "ST"\n  },\n  {\n    "name": "Saudi Arabia",\n    "code": "SA"\n  },\n  {\n    "name": "Senegal",\n    "code": "SN"\n  },\n  {\n    "name": "Serbia and Montenegro",\n    "code": "CS"\n  },\n  {\n    "name": "Seychelles",\n    "code": "SC"\n  },\n  {\n    "name": "Sierra Leone",\n    "code": "SL"\n  },\n  {\n    "name": "Singapore",\n    "code": "SG"\n  },\n  {\n    "name": "Slovakia",\n    "code": "SK"\n  },\n  {\n    "name": "Slovenia",\n    "code": "SI"\n  },\n  {\n    "name": "Solomon Islands",\n    "code": "SB"\n  },\n  {\n    "name": "Somalia",\n    "code": "SO"\n  },\n  {\n    "name": "South Africa",\n    "code": "ZA"\n  },\n  {\n    "name": "South Georgia and the South Sandwich Islands",\n    "code": "GS"\n  },\n  {\n    "name": "Spain",\n    "code": "ES"\n  },\n  {\n    "name": "Sri Lanka",\n    "code": "LK"\n  },\n  {\n    "name": "Sudan",\n    "code": "SD"\n  },\n  {\n    "name": "Suri",\n    "code": "SR"\n  },\n  {\n    "name": "Svalbard and Jan Mayen",\n    "code": "SJ"\n  },\n  {\n    "name": "Swaziland",\n    "code": "SZ"\n  },\n  {\n    "name": "Sweden",\n    "code": "SE"\n  },\n  {\n    "name": "Switzerland",\n    "code": "CH"\n  },\n  {\n    "name": "Syrian Arab Republic",\n    "code": "SY"\n  },\n  {\n    "name": "Taiwan, Province of China",\n    "code": "TW"\n  },\n  {\n    "name": "Tajikistan",\n    "code": "TJ"\n  },\n  {\n    "name": "Tanzania, United Republic of",\n    "code": "TZ"\n  },\n  {\n    "name": "Thailand",\n    "code": "TH"\n  },\n  {\n    "name": "Timor-Leste",\n    "code": "TL"\n  },\n  {\n    "name": "Togo",\n    "code": "TG"\n  },\n  {\n    "name": "Tokelau",\n    "code": "TK"\n  },\n  {\n    "name": "Tonga",\n    "code": "TO"\n  },\n  {\n    "name": "Trinidad and Tobago",\n    "code": "TT"\n  },\n  {\n    "name": "Tunisia",\n    "code": "TN"\n  },\n  {\n    "name": "Turkey",\n    "code": "TR"\n  },\n  {\n    "name": "Turkmenistan",\n    "code": "TM"\n  },\n  {\n    "name": "Turks and Caicos Islands",\n    "code": "TC"\n  },\n  {\n    "name": "Tuvalu",\n    "code": "TV"\n  },\n  {\n    "name": "Uganda",\n    "code": "UG"\n  },\n  {\n    "name": "Ukraine",\n    "code": "UA"\n  },\n  {\n    "name": "United Arab Emirates",\n    "code": "AE"\n  },\n  {\n    "name": "United Kingdom",\n    "code": "GB"\n  },\n  {\n    "name": "United States",\n    "code": "US"\n  },\n  {\n    "name": "United States Minor Outlying Islands",\n    "code": "UM"\n  },\n  {\n    "name": "Uruguay",\n    "code": "UY"\n  },\n  {\n    "name": "Uzbekistan",\n    "code": "UZ"\n  },\n  {\n    "name": "Vanuatu",\n    "code": "VU"\n  },\n  {\n    "name": "Venezuela",\n    "code": "VE"\n  },\n  {\n    "name": "Viet Nam",\n    "code": "VN"\n  },\n  {\n    "name": "Virgin Islands, British",\n    "code": "VG"\n  },\n  {\n    "name": "Virgin Islands, U.S.",\n    "code": "VI"\n  },\n  {\n    "name": "Wallis and Futuna",\n    "code": "WF"\n  },\n  {\n    "name": "Western Sahara",\n    "code": "EH"\n  },\n  {\n    "name": "Yemen",\n    "code": "YE"\n  },\n  {\n    "name": "Zambia",\n    "code": "ZM"\n  },\n  {\n    "name": "Zimbabwe",\n    "code": "ZW"\n  }\n]\n';});

define('components/timepicker',['exports', 'aurelia-framework', 'aurelia-event-aggregator', 'aurelia-i18n'], function (exports, _aureliaFramework, _aureliaEventAggregator, _aureliaI18n) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Timepicker = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    var _dec, _dec2, _class, _desc, _value, _class2;

    var Timepicker = exports.Timepicker = (_dec = (0, _aureliaFramework.inject)(_aureliaI18n.I18N, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.computedFrom)("i18n.i18next.language"), _dec(_class = (_class2 = function () {
        function Timepicker(i18n, eventAggregator) {
            _classCallCheck(this, Timepicker);

            this.today = new Date();

            this.i18n = i18n;
            this.ea = eventAggregator;

            this.ea.subscribe('i18n:locale:changed', function (payload) {});
        }

        _createClass(Timepicker, [{
            key: 'locale',
            get: function get() {
                return this.i18n.getLocale();
            }
        }]);

        return Timepicker;
    }(), (_applyDecoratedDescriptor(_class2.prototype, 'locale', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'locale'), _class2.prototype)), _class2)) || _class);
});
define('text!components/timepicker.html', ['module'], function(module) { module.exports = "<template>\n    <section>\n        <h1>mdc-timepicker</h1>\n\n        <mdc-timepicker locale.bind=\"locale\" value.bind=\"today\">\n            <label class=\"mdc-text-field__label\">Time</label>\n        </mdc-timepicker>\n    </section>\n\n\n    <section>\n\n        <code-tabs>\n            <template replace-part=\"tab-view-template\">\n                <au-code language=\"html\">\n                    <mdc-timepicker locale.bind=\"locale\" value.bind=\"today\">\n                        <label class=\"mdc-text-field__label\">Time</label>\n                    </mdc-timepicker>\n                </au-code>\n            </template>\n            <template replace-part=\"tab-model-template\">\n                <au-code language=\"javascript\">\n                    export class Timepicker {\n                        locale = 'de';\n                        today = new Date();\n                    }\n                </au-code>\n            </template>\n        </code-tabs>\n\n    </section>\n\n\n</template>\n"; });
define('components/text-field',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var TextField = exports.TextField = function TextField() {
    _classCallCheck(this, TextField);
  };
});
define('text!components/text-field.html', ['module'], function(module) { module.exports = "<template>\n    <template-content>\n        <div class=\"mdc-text-field\">\n            <input type=\"text\" class=\"mdc-text-field__input\">\n            <label class=\"mdc-floating-label\">Hint text</label>\n            <div class=\"mdc-line-ripple\"></div>\n        </div>\n    </template-content>\n</template>\n"; });
define('components/tab-bar',['exports', 'material-components-web'], function (exports, _materialComponentsWeb) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TabBar = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TabBar = exports.TabBar = function () {
        function TabBar() {
            _classCallCheck(this, TabBar);
        }

        TabBar.prototype.attached = function attached() {
            var _this = this;

            this.demoTabBar.MDCTabBar.tabs.forEach(function (tab) {
                tab.preventDefaultOnClick = true;
            });

            this.demoTabBar.MDCTabBar.listen('MDCTabBar:change', function (_ref) {
                var tabs = _ref.detail;

                _this.updateTab(tabs.activeTabIndex);
            });
        };

        TabBar.prototype.updateTab = function updateTab(idx) {
            var activePanel = this.demoPanels.querySelector(".tab-panel.is-active");
            if (activePanel) activePanel.classList.remove("is-active");
            var newActivePanel = this.demoPanels.querySelector(".tab-panel:nth-child(" + (idx + 1) + ")");
            if (newActivePanel) newActivePanel.classList.add("is-active");
        };

        return TabBar;
    }();
});
define('text!components/tab-bar.html', ['module'], function(module) { module.exports = "<template>\n\n    <require from=\"./tab-bar.css\"></require>\n\n    <div>\n        <nav ref=\"demoTabBar\" class=\"mdc-tab-bar\" role=\"tablist\">\n            <a role=\"tab\" aria-controls=\"tab-1\" class=\"mdc-tab mdc-tab--active\">Tab 1</a>\n            <a role=\"tab\" aria-controls=\"tab-2\" class=\"mdc-tab\">Tab 2</a>\n            <span class=\"mdc-tab-bar__indicator\"></span>\n        </nav>\n    </div>\n\n    <section>\n        <div ref=\"demoPanels\" class=\"tab-panels\">\n            <div class=\"tab-panel is-active\" id=\"tab-1\" role=\"tabpanel\" aria-hidden=\"false\">\n                <p>content of tab 1</p>\n            </div>\n            <div class=\"tab-panel\" id=\"tab-2\" role=\"tabpanel\" aria-hidden=\"true\">\n                <p>content of tab 2</p>\n            </div>\n        </div>\n    </section>\n\n\n    <section>\n\n        <code-tabs>\n            <template replace-part=\"tab-view-template\">\n                <au-code language=\"html\">\n                    <require from=\"./tab-bar.css\"></require>\n                    <div>\n                        <nav ref=\"myTabBar\" class=\"mdc-tab-bar\" role=\"tablist\">\n                            <a role=\"tab\" aria-controls=\"tab-1\" class=\"mdc-tab mdc-tab--active\">Tab 1</a>\n                            <a role=\"tab\" aria-controls=\"tab-2\" class=\"mdc-tab\">Tab 2</a>\n                            <span class=\"mdc-tab-bar__indicator\"></span>\n                        </nav>\n                    </div>\n\n                    <section>\n                        <div ref=\"panels\" class=\"tab-panels\">\n                            <div class=\"tab-panel is-active\" id=\"tab-1\" role=\"tabpanel\" aria-hidden=\"false\">\n                                <p>content of tab 1</p>\n                            </div>\n                            <div class=\"tab-panel\" id=\"tab-2\" role=\"tabpanel\" aria-hidden=\"true\">\n                                <p>content of tab 2</p>\n                            </div>\n                        </div>\n                    </section>\n                </au-code>\n            </template>\n            <template replace-part=\"tab-model-template\">\n                <au-code language=\"javascript\">\n                    export class TabBar {\n\n                        attached() {\n                            this.myTabBar.MDCTabBar.tabs.forEach((tab) => {\n                                tab.preventDefaultOnClick = true;\n                            });\n\n                            this.myTabBar.MDCTabBar.listen('MDCTabBar:change', ({ detail: tabs }) => {\n                                this.updateTab(tabs.activeTabIndex);\n                            });\n                        }\n\n                        updateTab(idx) {\n                            let activePanel = this.panels.querySelector(\".tab-panel.is-active\");\n                            if (activePanel) {\n                                activePanel.classList.remove(\"is-active\");\n                            }\n                            var newActivePanel = this.panels.querySelector(\n                                \".tab-panel:nth-child(\" + (idx + 1) + \")\"\n                            );\n                            if (newActivePanel) {\n                                newActivePanel.classList.add(\"is-active\");\n                            }\n                        }\n                    }\n                </au-code>\n            </template>\n            <template replace-part=\"tab-style-template\">\n                <au-code language=\"css\">\n                    .tab-panel {\n                        display: none;\n                    }\n\n                    .tab-panel.is-active {\n                        display: block;\n                    }\n                </au-code>\n            </template>\n        </code-tabs>\n\n    </section>\n\n\n\n</template>\n"; });
define('text!components/tab-bar.css', ['module'], function(module) { module.exports = ".tab-panel {\r\n    display: none;\r\n}\r\n\r\n.tab-panel.is-active {\r\n    display: block;\r\n}\r\n"; });
define('components/switch',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Switch = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _desc, _value, _class, _descriptor;

    var Switch = exports.Switch = (_class = function () {
        function Switch() {
            _classCallCheck(this, Switch);

            _initDefineProp(this, 'switched', _descriptor, this);
        }

        Switch.prototype.toggleSwitch = function toggleSwitch() {
            this.switched = !this.switched;
        };

        return Switch;
    }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'switched', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    })), _class);
});
define('text!components/switch.html', ['module'], function(module) { module.exports = "<template>\n\n    <section>\n        <h1>mdc-switch</h1>\n\n        <div class=\"mdc-switch\">\n            <input type=\"checkbox\" class=\"mdc-switch__native-control\" role=\"switch\" checked.bind=\"switched\">\n            <div class=\"mdc-switch__background\">\n                <div class=\"mdc-switch__knob\"></div>\n            </div>\n        </div>\n        <label for=\"basic-switch\">off/on</label>\n\n        <button class=\"mdc-button\" click.delegate=\"toggleSwitch()\">toggle switch</button>\n\n    </section>\n\n    <section>\n\n        <code-tabs>\n            <template replace-part=\"tab-view-template\">\n                <au-code language=\"html\">\n                    <div class=\"mdc-switch\">\n                        <input type=\"checkbox\" class=\"mdc-switch__native-control\" role=\"switch\" checked.bind=\"switched\">\n                        <div class=\"mdc-switch__background\">\n                            <div class=\"mdc-switch__knob\"></div>\n                        </div>\n                    </div>\n                    <label for=\"basic-switch\">off/on</label>\n                </au-code>\n            </template>\n            <template replace-part=\"tab-model-template\">\n                <au-code language=\"javascript\">\n                    import { bindable } from 'aurelia-framework';\n\n                    export class Switch {\n                        @bindable switched = true;\n\n                        toggleSwitch() {\n                            this.switched = !this.switched;\n                        }\n                    }\n                </au-code>\n            </template>\n        </code-tabs>\n\n    </section>\n\n</template>\n"; });
define('components/routes',['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  exports.routes = [{
    route: ['', '/'],
    name: 'overview',
    moduleId: _aureliaPal.PLATFORM.moduleName('./overview'),
    nav: false,
    title: "overview"
  }, {
    route: 'text-field',
    name: 'text-field',
    moduleId: _aureliaPal.PLATFORM.moduleName('./text-field'),
    nav: false,
    title: 'mdc-text-field'
  }, {
    route: 'switch',
    name: 'switch',
    moduleId: _aureliaPal.PLATFORM.moduleName('./switch'),
    nav: false,
    title: 'mdc-switch'
  }, {
    route: 'list',
    name: 'list',
    moduleId: _aureliaPal.PLATFORM.moduleName('./list'),
    nav: false,
    title: 'mdc-list'
  }, {
    route: 'chip',
    name: 'chip',
    moduleId: _aureliaPal.PLATFORM.moduleName('./chip'),
    nav: false,
    title: 'mdc-chip'
  }, {
    route: 'autocomplete',
    name: 'autocomplete',
    moduleId: _aureliaPal.PLATFORM.moduleName('./autocomplete'),
    nav: false,
    title: 'mdc-autocomplete'
  }, {
    route: 'datepicker',
    name: 'datepicker',
    moduleId: _aureliaPal.PLATFORM.moduleName('./datepicker'),
    nav: false,
    title: 'mdc-datepicker'
  }, {
    route: 'timepicker',
    name: 'timepicker',
    moduleId: _aureliaPal.PLATFORM.moduleName('./timepicker'),
    nav: false,
    title: 'mdc-timepicker'
  }, {
    route: 'tab-bar',
    name: 'tab-bar',
    moduleId: _aureliaPal.PLATFORM.moduleName('./tab-bar'),
    nav: false,
    title: 'mdc-tab-bar'
  }];
});
define('components/overview',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Overview = exports.Overview = function Overview() {
        _classCallCheck(this, Overview);
    };
});
define('text!components/overview.html', ['module'], function(module) { module.exports = "<template>\n    <section>\n        <h1>Components</h1>\n    </section>\n</template>\n"; });
define('components/list',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var List = exports.List = function List() {
        _classCallCheck(this, List);
    };
});
define('text!components/list.html', ['module'], function(module) { module.exports = "<template>\n\n\n    <style>\n        .mdc-list {\n            max-width: 600px;\n            border: 1px solid rgba(0, 0, 0, .1);\n        }\n    </style>\n\n\n    <div>\n        <h3 class=\"mdc-typography--subtitle1\">Two-Line with Leading and Trailing Icon and Divider</h3>\n\n        <ul class=\"mdc-list mdc-list--two-line mdc-list--avatar-list\">\n            <li class=\"mdc-list-item\">\n                <span class=\"mdc-list-item__graphic material-icons\" aria-hidden=\"true\">folder</span>\n                <span class=\"mdc-list-item__text\">Dog Photos\n                    <span class=\"mdc-list-item__secondary-text\">9 Jan 2018</span>\n                </span>\n                <span class=\"mdc-list-item__meta material-icons\" aria-hidden=\"true\">info</span>\n            </li>\n            <li class=\"mdc-list-item\">\n                <span class=\"mdc-list-item__graphic material-icons\" aria-hidden=\"true\">folder</span>\n                <span class=\"mdc-list-item__text\">Cat Photos\n                    <span class=\"mdc-list-item__secondary-text\">22 Dec 2017</span>\n                </span>\n                <span class=\"mdc-list-item__meta material-icons\" aria-hidden=\"true\">info</span>\n            </li>\n            <li class=\"mdc-list-divider\" role=\"separator\"></li>\n            <li class=\"mdc-list-item\">\n                <span class=\"mdc-list-item__graphic material-icons\" aria-hidden=\"true\">folder</span>\n                <span class=\"mdc-list-item__text\">Potatoes\n                    <span class=\"mdc-list-item__secondary-text\">30 Noc 2017</span>\n                </span>\n                <span class=\"mdc-list-item__meta material-icons\" aria-hidden=\"true\">info</span>\n            </li>\n            <li class=\"mdc-list-item\">\n                <span class=\"mdc-list-item__graphic material-icons\" aria-hidden=\"true\">folder</span>\n                <span class=\"mdc-list-item__text\">Carrots\n                    <span class=\"mdc-list-item__secondary-text\">17 Oct 2017</span>\n                </span>\n                <span class=\"mdc-list-item__meta material-icons\" aria-hidden=\"true\">info</span>\n            </li>\n        </ul>\n    </div>\n\n</template>\n"; });
define('components/index',['exports', './routes'], function (exports, _routes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.IdeasIndex = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var IdeasIndex = exports.IdeasIndex = function () {
        function IdeasIndex() {
            _classCallCheck(this, IdeasIndex);
        }

        IdeasIndex.prototype.configureRouter = function configureRouter(config, router) {
            config.map([].concat(_routes.routes));
        };

        return IdeasIndex;
    }();
});
define('text!components/index.html', ['module'], function(module) { module.exports = "<template>\n    <router-view></router-view>\n</template>\n"; });
define('components/datepicker',['exports', 'aurelia-framework', 'aurelia-event-aggregator', 'aurelia-i18n'], function (exports, _aureliaFramework, _aureliaEventAggregator, _aureliaI18n) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Datepicker = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    var _dec, _dec2, _class, _desc, _value, _class2;

    var Datepicker = exports.Datepicker = (_dec = (0, _aureliaFramework.inject)(_aureliaI18n.I18N, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.computedFrom)("i18n.i18next.language"), _dec(_class = (_class2 = function () {
        function Datepicker(i18n, eventAggregator) {
            _classCallCheck(this, Datepicker);

            this.today = new Date();

            this.i18n = i18n;
            this.ea = eventAggregator;

            this.ea.subscribe('i18n:locale:changed', function (payload) {});
        }

        _createClass(Datepicker, [{
            key: 'locale',
            get: function get() {
                return this.i18n.getLocale();
            }
        }]);

        return Datepicker;
    }(), (_applyDecoratedDescriptor(_class2.prototype, 'locale', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'locale'), _class2.prototype)), _class2)) || _class);
});
define('text!components/datepicker.html', ['module'], function(module) { module.exports = "<template>\n\n    <section>\n        <h1>mdc-datepicker</h1>\n\n        <mdc-datepicker locale.bind=\"locale\" start-week-on=\"monday\" value.bind=\"today\">\n            <label class=\"mdc-text-field__label\">Date</label>\n        </mdc-datepicker>\n    </section>\n\n\n    <section>\n\n        <code-tabs>\n            <template replace-part=\"tab-view-template\">\n                <au-code language=\"html\">\n                    <mdc-datepicker locale.bind=\"locale\" start-week-on=\"monday\" value.bind=\"today\">\n                        <label class=\"mdc-text-field__label\">Date</label>\n                    </mdc-datepicker>\n                </au-code>\n            </template>\n            <template replace-part=\"tab-model-template\">\n                <au-code language=\"javascript\">\n                    export class Datepicker {\n                        locale = 'de';\n                        today = new Date();\n                    }\n                </au-code>\n            </template>\n        </code-tabs>\n\n    </section>\n\n</template>\n"; });
define('components/chip',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Chip = exports.Chip = function Chip() {
    _classCallCheck(this, Chip);
  };
});
define('text!components/chip.html', ['module'], function(module) { module.exports = "<template>\n\n    <section>\n        <h1>mdc-chip</h1>\n\n\n        <div class=\"mdc-chip-set\">\n            <div class=\"mdc-chip\">\n                <div class=\"mdc-chip__text\">Chip content</div>\n            </div>\n            <div class=\"mdc-chip\">\n                <div class=\"mdc-chip__text\">Chip content</div>\n            </div>\n            <div class=\"mdc-chip\">\n                <div class=\"mdc-chip__text\">Chip content</div>\n            </div>\n        </div>\n    </section>\n\n    <section>\n\n        <code-tabs>\n            <template replace-part=\"tab-view-template\">\n                <au-code language=\"html\">\n                    <div class=\"mdc-chip-set\">\n                        <div class=\"mdc-chip\">\n                            <div class=\"mdc-chip__text\">Chip content</div>\n                        </div>\n                    </div>\n                </au-code>\n            </template>\n        </code-tabs>\n\n    </section>\n\n</template>\n"; });
define('components/autocomplete',['exports', 'aurelia-framework', 'text!../countries.json'], function (exports, _aureliaFramework, _countries) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Autocomplete = undefined;

    var _countries2 = _interopRequireDefault(_countries);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _dec, _desc, _value, _class, _descriptor;

    var countries = JSON.parse(_countries2.default);
    Object.freeze(countries);

    var Autocomplete = exports.Autocomplete = (_dec = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.oneWay }), (_class = function () {
        function Autocomplete() {
            _classCallCheck(this, Autocomplete);

            _initDefineProp(this, 'filteredList', _descriptor, this);

            this.selectedCountry = {
                id: "",
                description: ""
            };
        }

        Autocomplete.prototype.onChangeLookupEvent = function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(newValue, oldValue) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return new Promise(function (resolve, reject) {
                                    resolve(countries.filter(function (ele) {
                                        return ele.code.toLowerCase().includes(newValue.toLowerCase()) || ele.name.toLowerCase().includes(newValue.toLowerCase());
                                    }));
                                });

                            case 2:
                                this.filteredList = _context.sent;

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onChangeLookupEvent(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return onChangeLookupEvent;
        }();

        Autocomplete.prototype.onSelectionEvent = function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(item) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.selectedCountry = item;

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onSelectionEvent(_x3) {
                return _ref2.apply(this, arguments);
            }

            return onSelectionEvent;
        }();

        return Autocomplete;
    }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'filteredList', [_dec], {
        enumerable: true,
        initializer: null
    })), _class));
});
define('text!components/autocomplete.html', ['module'], function(module) { module.exports = "<template>\n\n    <section>\n        <h1>mdc-autocomplete</h1>\n\n        <mdc-autocomplete lookup.call=\"onChangeLookupEvent(newValue, oldValue)\" select.call=\"onSelectionEvent(item)\" items.bind=\"filteredList\">\n\n            <input type=\"text\" class=\"mdc-text-field__input\" value.bind=\"selectedCountry.name\">\n            <label class=\"mdc-floating-label\">Select a country</label>\n            <div class=\"mdc-line-ripple\"></div>\n            \n            <template replace-part=\"item-template\">\n                <span class=\"mdc-list-item__text\">${item.name}\n                    <span class=\"mdc-list-item__text__secondary\">${item.code}</span>\n                </span>\n            </template>\n\n        </mdc-autocomplete>\n\n    </section>\n\n\n    <section>\n\n        <code-tabs>\n            <template replace-part=\"tab-view-template\">\n                <au-code language=\"html\">\n                    <mdc-autocomplete lookup.call=\"onChangeLookupEvent(newValue, oldValue)\" select.call=\"onSelectionEvent(item)\" items.bind=\"filteredList\">\n\n                        <input type=\"text\" class=\"mdc-text-field__input\" value.bind=\"selectedCountry.name\">\n                        <label class=\"mdc-floating-label\">Select a country</label>\n                        <div class=\"mdc-line-ripple\"></div>\n\n                        <template replace-part=\"item-template\">\n                            <span class=\"mdc-list-item__text\">${item.name}\n                                <span class=\"mdc-list-item__text__secondary\">${item.code}</span>\n                            </span>\n                        </template>\n\n                    </mdc-autocomplete>\n                </au-code>\n            </template>\n            <template replace-part=\"tab-model-template\">\n                <au-code language=\"javascript\">\n                    import { bindable, bindingMode } from 'aurelia-framework';\n\n                    import countriesJSON from 'text!../countries.json';\n                    const countries = JSON.parse(countriesJSON);\n                    Object.freeze(countries);\n\n\n                    export class Autocomplete {\n                        @bindable({ defaultBindingMode: bindingMode.oneWay }) filteredList;\n\n                        constructor() {\n                            this.selectedCountry = {\n                                id: \"\",\n                                description: \"\"\n                            }\n                        }\n\n                        async onChangeLookupEvent(newValue, oldValue) {\n                            this.filteredList = await new Promise((resolve, reject) => {\n                                resolve(countries.filter(ele => {\n                                    return (ele.code.toLowerCase().includes(newValue.toLowerCase()) || ele.name.toLowerCase().includes(newValue.toLowerCase()));\n                                }));\n                            });\n                        }\n\n                        async onSelectionEvent(item) {\n                            this.selectedCountry = item;\n                        }\n\n                    }\n                </au-code>\n            </template>\n        </code-tabs>\n\n    </section>\n\n</template>\n"; });
define('app',['exports', 'aurelia-framework', 'aurelia-i18n', 'aurelia-templating-resources', 'aurelia-event-aggregator', 'aurelia-router', 'material-components-web', './router-config'], function (exports, _aureliaFramework, _aureliaI18n, _aureliaTemplatingResources, _aureliaEventAggregator, _aureliaRouter, _materialComponentsWeb, _routerConfig) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.App = undefined;

    var _routerConfig2 = _interopRequireDefault(_routerConfig);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router, _routerConfig2.default, _aureliaI18n.I18N, _aureliaTemplatingResources.BindingSignaler, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
        function App(router, appRouterConfig, i18n, signaler, eventAggregator) {
            _classCallCheck(this, App);

            this.languages = [{
                value: 'en',
                text: 'English'
            }, {
                value: 'de',
                text: 'Deutsch'
            }];
            this.selectedLanguage = 'en';

            this.router = router;

            this.appRouterConfig = appRouterConfig;

            this.i18n = i18n;
            this.signaler = signaler;
            this.ea = eventAggregator;
        }

        App.prototype.activate = function activate(params, routeConfig, navigationInstruction) {
            this.appRouterConfig.configure();
        };

        App.prototype.attached = function attached() {
            this.mdcMenu = new _materialComponentsWeb.menu.MDCMenu(this.languageMenu);
        };

        App.prototype.switchLanguage = function switchLanguage(lang) {
            var _this = this;

            this.selectedLanguage = lang;

            return new Promise(function (resolve) {
                var oldLocale = _this.i18n.getLocale();
                _this.i18n.setLocale(_this.selectedLanguage);

                _this.ea.publish('i18n:locale:changed', {
                    oldLocale: oldLocale,
                    newLocale: _this.selectedLanguage
                });
            });
        };

        App.prototype.toggleLanguageMenu = function toggleLanguageMenu() {
            this.mdcMenu.open = !this.mdcMenu.open;
        };

        App.prototype.toggleDrawer = function toggleDrawer() {
            this.drawer.MDCTemporaryDrawer.open = !this.drawer.MDCTemporaryDrawer.open;
        };

        App.prototype.navigateTo = function navigateTo(url) {
            this.drawer.MDCTemporaryDrawer.open = false;
            this.drawer.MDCTemporaryDrawer.getDefaultFoundation().adapter_.notifyClose();
            this.router.navigate(url, { force: true, replace: true, trigger: true });
        };

        return App;
    }()) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n\n    <require from=\"material-design-icons/iconfont/material-icons.css\"></require>\n    <require from=\"material-components-web/material-components-web.css\"></require>\n\n    <require from=\"./app.css\"></require>\n\n\n    <div class=\"mdc-toolbar mdc-toolbar--fixed\">\n        <div class=\"mdc-toolbar__row\">\n            <section class=\"mdc-toolbar__section mdc-toolbar__section--align-start\">\n                <button class=\"material-icons mdc-toolbar__menu-icon\" click.delegate=\"toggleDrawer()\">menu</button>\n                <span class=\"mdc-toolbar__title catalog-title\">aurelia-mdc-plugin</span>\n            </section>\n            <section class=\"mdc-toolbar__section mdc-toolbar__section--align-end\" role=\"toolbar\">\n                <a class=\"material-icons\" aria-label=\"Change language\" alt=\"Languages\" click.delegate=\"toggleLanguageMenu()\">language</a>\n\n                <div class=\"mdc-menu\" tabindex=\"-1\" ref=\"languageMenu\">\n                    <ul class=\"mdc-menu__items mdc-list\" role=\"menu\" aria-hidden=\"true\">\n                        <li class=\"mdc-list-item mdc-typography--body2\" role=\"menuitem\" tabindex=\"0\" repeat.for=\"language of languages\" value.bind=\"language.value\" click.delegate=\"switchLanguage(language.value)\">${language.text}</li>\n                    </ul>\n                </div>\n            </section>\n        </div>\n    </div>\n\n\n\n\n    <aside ref=\"drawer\" class=\"mdc-drawer--temporary\" style=\"\">\n        <nav class=\"mdc-drawer__drawer\">\n            <header class=\"mdc-drawer__header\">\n                <div class=\"mdc-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary\">Components</div>\n            </header>\n            <nav class=\"mdc-drawer__content mdc-list-group\">\n                <div class=\"mdc-list\">\n                    <!-- mdc-temporary-drawer--selected -->\n                    <a class=\"mdc-list-item\" href=\"#\" click.trigger=\"navigateTo('/components')\" data-mdc-tabindex-handled=\"true\" tabindex=\"-1\">Overview</a>\n                    <hr class=\"mdc-list-divider\">\n                    <a class=\"mdc-list-item\" href=\"#\" click.trigger=\"navigateTo('/components/text-field')\" data-mdc-tabindex-handled=\"true\" tabindex=\"-1\">Textfield</a>\n                    <a class=\"mdc-list-item\" href=\"#\" click.trigger=\"navigateTo('/components/checkbox')\" data-mdc-tabindex-handled=\"true\" tabindex=\"-1\">Checkbox</a>\n                    <a class=\"mdc-list-item\" href=\"#\" click.trigger=\"navigateTo('/components/list')\" data-mdc-tabindex-handled=\"true\" tabindex=\"-1\">List</a>\n                    <a class=\"mdc-list-item\" href=\"#\" click.trigger=\"navigateTo('/components/switch')\" data-mdc-tabindex-handled=\"true\" tabindex=\"-1\">Switch</a>\n                    <a class=\"mdc-list-item\" href=\"#\" click.trigger=\"navigateTo('/components/chip')\" data-mdc-tabindex-handled=\"true\" tabindex=\"-1\">Chip</a>\n                    <a class=\"mdc-list-item\" href=\"#\" click.trigger=\"navigateTo('/components/tab-bar')\" data-mdc-tabindex-handled=\"true\" tabindex=\"-1\">Tab Bar</a>\n                    <hr class=\"mdc-list-divider\">\n                    <a class=\"mdc-list-item\" href=\"#\" click.trigger=\"navigateTo('/components/autocomplete')\" data-mdc-tabindex-handled=\"true\" tabindex=\"-1\">Autocomplete</a>\n                    <a class=\"mdc-list-item\" href=\"#\" click.trigger=\"navigateTo('/components/datepicker')\" data-mdc-tabindex-handled=\"true\" tabindex=\"-1\">Datepicker</a>\n                    <a class=\"mdc-list-item\" href=\"#\" click.trigger=\"navigateTo('/components/timepicker')\" data-mdc-tabindex-handled=\"true\" tabindex=\"-1\">Timepicker</a>\n                </div>\n            </nav>\n        </nav>\n    </aside>\n\n\n\n    <main class=\"mdc-toolbar-fixed-adjust\">\n        <router-view></router-view>\n    </main>\n\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "main {\n    overflow: auto;\n}\n"; });