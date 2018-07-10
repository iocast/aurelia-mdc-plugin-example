import { bindable, bindingMode } from 'aurelia-framework';

import * as countries from '../countries.json';
//const countries = JSON.parse(countriesJSON);
Object.freeze(countries);


export class Autocomplete {
  @bindable({ defaultBindingMode: bindingMode.oneWay }) filteredList;

  constructor() {
    this.selectedCountry = {
      id: "",
      description: ""
    }
  }

  async onChangeLookupEvent(newValue, oldValue) {
    this.filteredList = await new Promise((resolve, reject) => {
      resolve(countries.filter(ele => {
        return (ele.code.toLowerCase().includes(newValue.toLowerCase()) || ele.name.toLowerCase().includes(newValue.toLowerCase()));
      }));
    });
  }

  async onSelectionEvent(item) {
    this.selectedCountry = item;
  }

}
