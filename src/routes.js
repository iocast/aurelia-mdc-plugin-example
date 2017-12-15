import { PLATFORM } from 'aurelia-pal';

export let routes = [{
        route: ['', 'welcome', 'home', 'index'],
        name: 'landing',
        moduleId: PLATFORM.moduleName('./landing'),
        nav: false,
        title: 'Welcome'
    },
    {
        route: 'components',
        name: 'components',
        moduleId: PLATFORM.moduleName('./components/index'),
        nav: false,
        title: 'Components'
    }
];
