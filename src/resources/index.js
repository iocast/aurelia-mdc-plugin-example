import { PLATFORM } from 'aurelia-pal';

export function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('./elements/au-code'),
    PLATFORM.moduleName('./elements/code-tabs'),

    PLATFORM.moduleName('./elements/template-content')
  ]);
}
