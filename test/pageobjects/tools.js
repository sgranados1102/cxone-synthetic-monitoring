import HomePage from  '../pageobjects/home.page';
import Page from './page';
import constants from '../../data/constants.json'

class Tools extends Page{
    constructor(){
        super();
    }

    /**Tools locator strategies */
    get toast_notification_close_button(){return $('.toastNotificationCardTitle > .toastNotificationCardClose')}
    get workspace_tab_close_button(){return $("[id*='closeWorkspaceTab-']")}
    get workspace_tabs(){return $$("[id*='workspaceTab-'].d-flex")}
    
    /**
     * @function setEnvReadyForTesting It validates that the user is already logged in into the Platform making sure the Profile menu icon is clickable
     */
    async setEnvReadyForTesting(){
        await browser.pause(constants.timers.short2);
        await this.waitForElementClickable(await HomePage.homepage_profile);
        await this.closeDashboard();
    }
    
     /**
    * @function closeDashboard It closes the Dashboard tabs to remove any residual data to start testing the Environment.
    */
    async closeDashboard(){
        const closeTabsObtained = await this.workspace_tabs;
        for (let i = 0; i < closeTabsObtained.length; i++) {
            await this.click(closeTabsObtained[i]);
            await browser.pause(constants.timers.short3);
            if(!await this.isClickable(this.workspace_tab_close_button)) continue;
            await this.click(this.workspace_tab_close_button)
            await browser.pause(constants.timers.short3);
        }
    }
}

export default new Tools();