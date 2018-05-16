import { bindable } from 'aurelia-framework';

export class Switch {
    @bindable switched = true;

    toggleSwitch() {
        this.switched = !this.switched;
    }
}
