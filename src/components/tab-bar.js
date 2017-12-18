import { tabs } from 'material-components-web'

export class TabBar {

    attached() {
        this.demoTabBar.MDCTabBar.tabs.forEach((tab) => {
            tab.preventDefaultOnClick = true;
        });

        this.demoTabBar.MDCTabBar.listen('MDCTabBar:change', ({ detail: tabs }) => {
            this.updateTab(tabs.activeTabIndex);
        });
    }

    updateTab(idx) {
        let activePanel = this.demoPanels.querySelector(".tab-panel.is-active");
        if (activePanel) activePanel.classList.remove("is-active");
        let newActivePanel = this.demoPanels.querySelector(
            ".tab-panel:nth-child(" + (idx + 1) + ")"
        );
        if (newActivePanel) newActivePanel.classList.add("is-active");
    }

}
