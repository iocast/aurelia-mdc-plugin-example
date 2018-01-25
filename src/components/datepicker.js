import { inject, computedFrom } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { I18N } from 'aurelia-i18n';

@inject(I18N, EventAggregator)
export class Datepicker {
    today = new Date();

    constructor(i18n, eventAggregator) {
        this.i18n = i18n;
        this.ea = eventAggregator;

        this.ea.subscribe('i18n:locale:changed', payload => {});
    }


    @computedFrom("i18n.i18next.language")
    get locale() {
        return this.i18n.getLocale();
    }
}
