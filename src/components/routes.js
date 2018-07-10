import { PLATFORM } from 'aurelia-pal';

export let routes = [
  {
    route: ['', '/'],
    name: 'overview',
    moduleId: PLATFORM.moduleName('./overview'),
    nav: false,
    title: 'overview'
  },
  {
    route: 'text-field',
    name: 'text-field',
    moduleId: PLATFORM.moduleName('./text-field'),
    nav: false,
    title: 'mdc-text-field'
  },
  {
    route: 'switch',
    name: 'switch',
    moduleId: PLATFORM.moduleName('./switch'),
    nav: false,
    title: 'mdc-switch'
  },
  {
    route: 'list',
    name: 'list',
    moduleId: PLATFORM.moduleName('./list'),
    nav: false,
    title: 'mdc-list'
  },
  {
    route: 'chip',
    name: 'chip',
    moduleId: PLATFORM.moduleName('./chip'),
    nav: false,
    title: 'mdc-chip'
  },
  {
    route: 'autocomplete',
    name: 'autocomplete',
    moduleId: PLATFORM.moduleName('./autocomplete'),
    nav: false,
    title: 'mdc-autocomplete'
  },
  {
    route: 'datepicker',
    name: 'datepicker',
    moduleId: PLATFORM.moduleName('./datepicker'),
    nav: false,
    title: 'mdc-datepicker'
  },
  {
    route: 'timepicker',
    name: 'timepicker',
    moduleId: PLATFORM.moduleName('./timepicker'),
    nav: false,
    title: 'mdc-timepicker'
  },
  {
    route: 'tab-bar',
    name: 'tab-bar',
    moduleId: PLATFORM.moduleName('./tab-bar'),
    nav: false,
    title: 'mdc-tab-bar'
  }
];
