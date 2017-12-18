import { inject, bindable, bindingMode } from 'aurelia-framework';
import { Router } from 'aurelia-router';

import AppRouterConfig from './router-config';

@inject(Router, AppRouterConfig)
export class App {

    constructor(router, appRouterConfig) {
        this.router = router;
        // The application's configuration, including the route definitions that we've declared in router-config.js
        this.appRouterConfig = appRouterConfig;
    }

    activate(params, routeConfig, navigationInstruction) {
        // Here, we run the configuration when the app loads.
        this.appRouterConfig.configure();
    }

    toggleDrawer() {
        this.drawer.MDCTemporaryDrawer.open = !this.drawer.MDCTemporaryDrawer.open;
    }

    navigateTo(url) {
        this.drawer.MDCTemporaryDrawer.open = false;
        this.drawer.MDCTemporaryDrawer.getDefaultFoundation().adapter_.notifyClose();
        this.router.navigate(url, { force: true, replace: true, trigger: true });
    }

}
