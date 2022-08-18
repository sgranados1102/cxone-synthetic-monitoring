
import Page from "./page";
import constants from '../../data/constants.json'
class CXoneManageDashboardPage extends Page{
    constructor(){
        super();
    }

    /**Locator strategies */
    get manage_dashboards_dashboard_amount(){return $('.ml-4')}
    get manage_dashboards_dashboard_new_button(){return $('.btn.header-btn.ml-0')}
    get manage_dashboards_dashboard_search(){return $('.live-search > .form-control')}
    get manage_dashboards_dashboard_favorites_tab(){return $('.nav-item:nth-child(1) > a')}
    get manage_dashboards_dashboard_all_tab(){return $('.nav-item:nth-child(2) > a')}
    get manage_dashboards_dashboard_results(){return $$('.ag-row cv-favorite-button-renderer > .d-flex')}
    get manage_dashboards_first_result_favorite(){return $('cv-favorite-button-renderer > .d-flex svg')}
    get manage_dashboards_first_result_open_link(){return $('.descriptionText')}
    get manage_dashboards_first_result_more_option_button(){return $('.contextMenuButton')}
    get manage_dashboards_first_result_more_options_edit(){return $("//span[contains(.,'Edit Details')]")}
    get manage_dashboards_first_result_more_options_duplicate(){return $("//span[contains(.,'Duplicate')]")}
    get manage_dashboards_first_result_more_options_share(){return $("//span[contains(.,'Share')]")}
    get manage_dashboards_first_result_more_options_subscribe(){return $("//span[contains(.,'Subscribe')]")}
    
    /**Manage Dashboards - Quick actions */
    get manage_dashboards_first_result_delete_button(){return $('.deleteButton.fill-iconDefault')}
    get manage_dashboards_first_result_delete_cancel(){return $('#confirm-dialog-cancel')}
    get manage_dashboards_first_result_delete_close(){return $('#confirm-dialog-close')}
    get manage_dashboards_first_result_delete_confirm(){return $('#confirm-dialog-ok')}
    get manage_dashboards_close_button(){return $('.modal-header button')}
    
    /**web actions */

    /**
     * @function clickOnDashboardNewButton It clicks on the new dashaboard button within the Manage Dashboard page to open the new dashboard modal
     */
    async clickOnDashboardNewButton(){
        await this.click(await this.manage_dashboards_dashboard_new_button);
    }

    /**
     * @function searcDashboard It filters all the Dashboard results by setting a Dashboard name value as filter criteria

     * @param {*} dashboardName Dashboard Name you want to search
     */
    async searcDashboard(dashboardName=""){
        await this.typeInto(await this.manage_dashboards_dashboard_search,dashboardName);
        await browser.pause(constants.timers.short);
    }

    /**
     * @function clickOnManageDashboardTab It clicks on the Manage Dashboard tabs to change between the Dashboards marked as favorites and all dashboards
     * @param {*} tabName the tab you want to click on. Values: favorites|all
     */
    async clickOnManageDashboardTab(tabName=""){
        await this.click(await this[`manage_dashboards_dashboard_${tabName.toLowerCase()}_tab`])
    }


    /**
     * @function clickOnDashboardMoreOptions It clicks on the Elipsis button to display the more options menu for a specific Dashboard
     */
    async clickOnDashboardMoreOptions(){
        await this.click(await this.manage_dashboards_first_result_more_option_button);

    }

    /**
     * @function clickOnMoreOptionsMenuItem It clicks on one of the More options Menu item to execute Quick actions on the Actual Dashboard
     * @param {*} moreOptionIndex The option index you want to click on
     * Values: Edit | Duplicate | Share | Subscribe
     */
    async clickOnMoreOptionsMenuItem(moreOptionsName=""){
        const obtainedElement = await this[`manage_dashboards_first_result_more_options_${moreOptionsName.toLowerCase()}`];
        await obtainedElement.click();
        await browser.pause(constants.timers.short2);
    }


    /**
     * @function clickOnDeleteDashboardButton It clicks on the Delete quick action button to pop up the modal window to confirm the Dashboard Deletion
     */
    async clickOnDeleteDashboardButton(){
        await this.click(await this.manage_dashboards_first_result_delete_button);

    }
    
    /**
     * @function clickOnDeleteDashboardConfirm It clicks on the Confirm button to delete the Dashboard 
     * @param {*}  for allure reporting purposes
     */
    async clickOnDeleteDashboardConfirm(){
        await this.click(await this.manage_dashboards_first_result_delete_confirm);
    }

    /**
     * @function clickOnDeleteDashboardCancel It clicks on the Cancel button to cancel the Dashboard Deletion 

     */
    async clickOnDeleteDashboardCancel(){
        await this.click(await this.manage_dashboards_first_result_delete_cancel);
    }
    
       /**
     * @function clickOnDeleteDashboardClose It clicks on the Close button to close the Dashboard Deletion 
     */
    async clickOnDeleteDashboardClose(){
        await this.click(await this.manage_dashboards_first_result_delete_close);
    }

     /**
     * @function explicitPause It executes a browser pause - explicit wait
     * @param {*} timer The amount of miliseconds you want to wait
     */
     async explicitPause(timer=constants.timers.short2){
        await browser.pause(timer);
    }

    /**
     * @function closeModal It closes the mocal by clicking on the X button 

     */
    async closeModal(){
        await this.click(await this.manage_dashboards_close_button);

    }
}

export default new CXoneManageDashboardPage();