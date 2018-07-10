import { observable } from 'aurelia-framework';

export class Chip {
  @observable selectedText = '';

  printChipSetResult() {
    for (let i = 0; i < this.choiceSet.MDCChipSet.chips.length; i++) {
      if (this.choiceSet.MDCChipSet.chips[i].isSelected()) {
        this.selectedText = `selected chip index is ${i}`;
      }
    }
  }
}
