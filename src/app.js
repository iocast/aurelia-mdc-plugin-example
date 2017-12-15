import { inject, bindable, bindingMode } from 'aurelia-framework';
import { Router } from 'aurelia-router';

import AppRouterConfig from './router-config';

import { drawer } from 'material-components-web';


@inject(Router, AppRouterConfig)
export class App {

    constructor(router, appRouterConfig) {
        // The application's configuration, including the route definitions that we've declared in router-config.js
        this.appRouterConfig = appRouterConfig;
    }

    activate(params, routeConfig, navigationInstruction) {
        // Here, we run the configuration when the app loads.
        this.appRouterConfig.configure();
    }


    attached() {
        this.mdcDrawer = new drawer.MDCTemporaryDrawer(this.drawer);
    }

    toggleDrawer() {
        this.mdcDrawer.open = !this.mdcDrawer.open;
    }

}
