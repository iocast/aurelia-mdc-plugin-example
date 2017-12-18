import { tabs } from 'material-components-web'

export class CodeTabs {

    attached() {
        this.codeTabBar.MDCTabBar.tabs.forEach((tab) => {
            tab.preventDefaultOnClick = true;
        });

        this.codeTabBar.MDCTabBar.listen('MDCTabBar:change', ({ detail: tabs }) => {
            this.updateTab(tabs.activeTabIndex);
        });
    }

    updateTab(idx) {
        let activePanel = this.codePanels.querySelector(".code-tab-panel.is-active");
        if (activePanel) activePanel.classList.remove("is-active");
        let newActivePanel = this.codePanels.querySelector(
            ".code-tab-panel:nth-child(" + (idx + 1) + ")"
        );
        if (newActivePanel) newActivePanel.classList.add("is-active");

    }

}
