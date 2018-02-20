import { inject, bindable, bindingMode } from 'aurelia-framework';
import { I18N } from 'aurelia-i18n';
import { BindingSignaler } from 'aurelia-templating-resources';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router } from 'aurelia-router';
import { menu } from 'material-components-web';

import AppRouterConfig from './router-config';

@inject(Router, AppRouterConfig, I18N, BindingSignaler, EventAggregator)
export class App {

    languages = [{
            value: 'en',
            text: 'English'
        },
        {
            value: 'de',
            text: 'Deutsch'
        }
    ];
    selectedLanguage = 'en';
    languageMenu;


    constructor(router, appRouterConfig, i18n, signaler, eventAggregator) {
        this.router = router;
        // The application's configuration, including the route definitions that we've declared in router-config.js
        this.appRouterConfig = appRouterConfig;

        this.i18n = i18n;
        this.signaler = signaler;
        this.ea = eventAggregator;
    }

    activate(params, routeConfig, navigationInstruction) {
        // Here, we run the configuration when the app loads.
        this.appRouterConfig.configure();
    }

    attached() {
        this.mdcMenu = new menu.MDCMenu(this.languageMenu);
    }

    switchLanguage(lang) {
      this.selectedLanguage = lang;

      return new Promise( resolve => {
        let oldLocale = this.i18n.getLocale();
        this.i18n.setLocale(this.selectedLanguage);

        this.ea.publish('i18n:locale:changed', {
          oldLocale: oldLocale,
          newLocale: this.selectedLanguage
        });
      });
    }

    toggleLanguageMenu() {
      this.mdcMenu.open = !this.mdcMenu.open;
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
