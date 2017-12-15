import { PLATFORM } from 'aurelia-pal';
import { inject } from 'aurelia-framework';
import { Router, Redirect } from 'aurelia-router';

import { routes } from './routes';

@inject(Router)
export default class {

  constructor(router) {
    this.router = router;
  }

  configure() {
    var appRouterConfig = function(config) {
      //config.title = 'Challenge Plattform';

      config.map([
        ...routes
      ]);
      /*
      config.mapUnknownRoutes(instruction => {
        return {
          route: '404',
          name: 'not-found',
          moduleId: PLATFORM.moduleName('errors/not-found')
        };
      });
      */

      config.fallbackRoute('');
    };

    this.router.configure(appRouterConfig);
  }

}
