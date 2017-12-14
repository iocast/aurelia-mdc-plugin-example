import environment from './environment';

/****************
 * Polyfills
 ****************/
import 'intl';
if(!('formatToParts' in Intl.DateTimeFormat.prototype)) {
  Intl = IntlPolyfill;
}

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.use.plugin('@iocast/aurelia-mdc-plugin');

  aurelia.start().then(() => aurelia.setRoot());
}
