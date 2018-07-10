export class Select {
    attached() {
        this.select.MDCSelect.listen('change', () => {
            alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
        });
    }
}
