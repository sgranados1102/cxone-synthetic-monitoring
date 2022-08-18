const { default: Page } = require("./page");
import chai from "chai";
import constants from '../../data/constants.json'
class CXonePage extends Page {
  constructor() {
    super();
  }

  /**CXOne Main Locator Strategies */
  get dashboard_dropdown() {return $(".dropdown-button");}
  get dashboard_searchBar() {return $('.cxone-text-input input')}
  get dashboard_dropdown_list() {return $(".options-wrapper");}
  get dashboard_dropdown_firstOpt() {return $(".custom-item");}
  get new_dashboard_button(){return $("#newDashButton")}
  get empty_workspace_message() {return $('.empty-workspace-message')}
  /**CXOne Create Dashboard Locator Strategies */
  get modal_header(){return $('.modal-header>h7')}
  get dashboard_name_input() {return $('input.dashboardInputInput')}
  get dashboard_description_input() {return $('textarea.dashboardInputInput')}
  get dashboard_core_options_menu() {return $('#headerButtonsContainer')}

  /**Add wiget locator strategies */
  get dashboard_add_widget_button(){return $('#addWidgetButton')}
  get dashboard_add_widget_search_bar(){return $('.cxone-text-input input')}
  get dashboard_add_metrics_button(){return $('.flex-column > .btn')}

  /**Categories locator strategies */
  get dashboard_widget_categories_acd(){return $('//a[contains(text(),"ACD")]')}
  get dashboard_widget_categories_ia(){return $('//a[contains(text(),"IA")]')}
  get dashboard_widget_categories_qm(){return $('//a[contains(text(),"QM")]')}
  get dashboard_widget_categories_company_widget(){return $('//a[contains(text(),"ClearView Automated Testing")]')}
  get dashboard_widget_categories_metric_visualization(){return $('//a[contains(text(),"Metric Visualization")]')}

  /**WIDGET - ACD */
  /**Search click */
  get dashboard_widget_acd_interval_breakdown_search(){return $('#widgetCard-111')}
  get dashboard_widget_acd_metrics_interval_search(){return $('#widgetCard-111')}
  get dashboard_widget_acd_agent_list_search(){return $('#widgetCard-21')}
  get dashboard_widget_acd_agent_state_counter_search(){return $('#widgetCard-19')}
  get dashboard_widget_acd_contact_arrival_search(){return $('#widgetCard-15')}
  get dashboard_widget_acd_contact_list_search(){return $('#widgetCard-59')}
  get dashboard_widget_acd_digital_skill_summary_search(){return $('#widgetCard-118')}
  get dashboard_widget_acd_dispositions_search(){return $('#widgetCard-95')}
  get dashboard_widget_acd_expanded_summary_search(){return $('#widgetCard-105')}
  get dashboard_widget_acd_gauge_search(){return $('#widgetCard-23')}
  get dashboard_widget_acd_interval_search(){return $('#widgetCard-27')}
  get dashboard_widget_acd_kpi_search(){return $('#widgetCard-2')}
  get dashboard_widget_acd_leaderboard_search(){return $('#widgetCard-16')}
  get dashboard_widget_acd_login_logout_search(){return $('#widgetCard-96')}
  get dashboard_widget_acd_metric_review_search(){return $('#widgetCard-54')}
  get dashboard_widget_acd_reporting_set_search(){return $('#widgetCard-73')}
  get dashboard_widget_acd_service_level_search(){return $('#widgetCard-100')}
  get dashboard_widget_acd_metrics_summary_search(){return $('#widgetCard-112')}
  get dashboard_widget_acd_summary_search(){return $('#widgetCard-14')}
  get dashboard_widget_acd_queue_counter_search(){return $('#widgetCard-101')}
  get dashboard_widget_acd_agent_state_summary_search(){return $('#widgetCard-110')}
  get dashboard_widget_acd_callback_requests_search(){return $('#widgetCard-108')}

  /**WIDGET - QM */
  /**Search click */
  get dashboard_widget_qm_evaluator_performance_search(){return $('#widgetCard-115')}
  get dashboard_widget_qm_quality_score_search(){return $('#widgetCard-113')}
  get dashboard_widget_qm_evaluator_calibration_search(){return $('#widgetCard-120')}

  /**WIDGET - IA */
  /**Search Click */
  get dashboard_widget_ia_calculator_search(){return $('#widgetCard-9')}
  get dashboard_widget_ia_notepad_search(){return $('#widgetCard-24')}
  
  /**WIDGET - COMPANY WIDGET */
  get dashboard_widget_company_widget_forms_calibration_search(){return $('#widgetCard-119')}
  get dashboard_widget_company_widget_contact_states_by_skill_search(){return $('#widgetCard-124')}
  /**Dashboard widgets buttons */
  get dashboard_close_add_widget_button(){return $('.closeWidgets')}
  get dashboard_save_edition_mode_button(){return $('.ng-star-inserted > div > .btn-primary')}
  get dashboard_cancel_edition_mode_button(){return $('#closeAddWidgetButton')}
  get dashboard_cancel_edition_mode_cancel(){return $('div:nth-child(1) > .btn-icon')}
  get dashboard_cancel_edition_mode_confirm(){return $('div:nth-child(1) > .btn-primary')}
  get dashboard_add_widget_first_result(){return $('#widgetItem-Search div')}
  get dashboard_add_widget_widget_preview(){return $('.module-preview.tooltip')}

  get apply_action_button() {return $('.modal-footer button:nth-of-type(2)')}

  /**Validate no dashboard Previously created */




  /**CXone Core Web Actions */
  /**
   * @function clickCreateNewDashboard it clicks the New dashboard button to prompt the user with a New Dashboard modal form.
   * it also validates we got the right modal form - based on the modal text header
   
   */
  async clickCreateNewDashboard(){
    await this.click(await this.new_dashboard_button);
    /**Validate modal header */
    await browser.pause(constants.timers.short);
    const modalText = await this.modal_header.getText();
    /**Making assertions with Chai to validate text obtained */
    chai.expect(modalText).to.be.equal(constants.pageObjects.cxOnePage.modalValidations.new);
}

/**
 * @function setDashboardName it sets the Dashboard name as a value within the modal input
 * @param {*} dashboardName Dashboard name we want to set
 */
  async setDashboardName(dashboardName=""){
      await this.typeInto(await this.dashboard_name_input,dashboardName);
      await browser.pause(constants.timers.short2);
  }

  /**
   * @function setDashboardDescription It sets the dashboard description for a New, edited or duplicated dashboard
   * @param {*} dashboardDescription The description you want to set
   */
 async setDashboardDescription(dashboardDescription=""){
      await this.typeInto(await this.dashboard_description_input,dashboardDescription);
  }

  /**
   * @function clickSaveNewDashboard Tt clicks on the Save button to create a new or save the changes for an existing dashboard
   * (Edition or Duplicate)
   
   */
   async clickSaveNewDashboard(){
      await this.click(await this.apply_action_button);
      /**Verification point using the assertion library - this element does appear */
      chai.assert.exists(await this.dashboard_core_options_menu);

  }

    /**
     * @function clickDashboardMoreOptions It opens the more options menu for an existing dashboard clicking on the elipsis button
     */
    async clickDashboardMoreOptions(){
        await this.click(await this.more_options_button);
    }

    /**Widget web actions */
    
    /**
     * @function clickOnAddwidgetButton It clicks on the Add widget button from the header options
     */
    async clickOnAddwidgetButton(){
        await this.click(await this.dashboard_add_widget_button);
    }

    /**
     * @function clickOnCloseAddWidgetButton It clicks on the X button to close the Add widget interface
     */
    async clickOnCloseAddWidgetButton(){
        await this.click(await this.dashboard_close_add_widget_button);
    }

    /**
     * @function hoverWidgetFirstResult It hovers on the Search Widget result and make the Preview tooltip appear
     */
    async hoverWidgetFirstResult(){
        await this.hoverElement(await this.dashboard_add_widget_first_result);
        await browser.pause(constants.timers.short2);
    }
    
    /**
     * @function verifyWidgetPreview It performs an assertion to validate if the Tooltip preview exists within the DOM
     */
    async verifyWidgetPreview(){
        chai.assert.exists(await this.dashboard_add_widget_widget_preview);
    }

    /**
     * @function searchWidget It sets a value on the widget search bar to filter for a specific widget
     * @param {*} widgetName Widget name you want to search for
     */
    async searchWidget(widgetName=""){
        await this.typeInto(await this.dashboard_add_widget_search_bar,widgetName);
        await browser.pause(constants.timers.short2);
    }


    /**
     * @function addWidgetToDashboardBySearch It adds a module to the currently open dashboard, it receives the category and module name and it formats it 
     * into the name spacing convetion it has been implemented on all the locator strategies
     * @param {*} category This is the widget category name (metrics, reports, real time, etc.)
     * @param {*} moduleName The module name under that category.
     */
     async addWidgetToDashboardBySearch(category="",moduleName=""){
        //Search the Module on the search bar
        await this.typeInto(await this.dashboard_add_widget_search_bar,moduleName);
        //Creating the Module name formatting the parameters provided
        const formattedCategory = category.toLowerCase().split(' ').join("_");
        const formattedModuleName = moduleName.toLowerCase().split(' ').join("_");
        browser.pause(constants.timers.short2);
        const widgetID = '#widgetItem-Search ' + await this[`dashboard_widget_${formattedCategory}_${formattedModuleName}_search`].selector;
        await this.click(await $(widgetID));
        await browser.pause(constants.timers.short);
    }
    
    /**
     * @function addWidgetToDashboardByClickingCategory It adds a widget by clicking on the Category tab and then selecting the respective widget for the Dashboard
     
     * @param {*} category Category tab you want to click on
     * @param {*} moduleName The module name under that category to add
     * @example addWidgetToDashboardByClickingCategory('CX1-DASCORE-001','Real Time','Expanded Summary')
     */
    async addWidgetToDashboardByClickingCategory(category="",moduleName=""){

        //Creating the Module name formatting the parameters provided
        const formattedCategory = category.toLowerCase().split(' ').join("_");
        const formattedModuleName = moduleName.toLowerCase().split(' ').join("_");

        await browser.pause(constants.timers.short2);
        await this.click(await this[`dashboard_widget_categories_${formattedCategory}`]);
        reporter.addStep('info',`${category} Category clicked successfully`);

        await browser.pause(constants.timers.short2);
        await this.click(await this[`dashboard_widget_${formattedCategory}_${formattedModuleName}_search`]);
        reporter.addStep('info',`${moduleName} added successfully from ${category} category`);
        await browser.pause(constants.timers.short);
    }
        /**
     * @function clickNewDashboardMoreOptions It clicks on the New Dashboard button on the more options menu
     */
         async clickNewDashboardMoreOptions(){
            await this.click( await this.more_options_new_dashboard);
            await browser.pause(constants.timers.short);
            const modalText = await this.modal_header.getText();
            /**Making assertions with Chai to validate text obtained */
            chai.expect(modalText).to.be.equal(constants.pageObjects.cxOnePage.modalValidations.new);
        }
    

    /**
     * @function clickOnSaveEditionMode It clicks on the Save button to save all changes made to the Dashboard So far
     */
    async clickOnSaveEditionMode(){
        await this.click( await this.dashboard_save_edition_mode_button);
    }

    /**General Webactions */

    /**
     * @function closeModal It closes the current modal window, clicking on the X Button
     */
    async closeModal(){
        await this.click(await this.close_modal_button);
        reporter.addStep('info','Modal Closed successfully');
    }
    /**
     * @function cancelModal It cancels the current modal window by clicking on the footer cancel button
     */
    async cancelModal(){
        await this.click(await this.cancel_action_button);
        reporter.addStep('info','Modal Closed successfully');
    }

    /**
     * @function saveModal It clicks on the Save buttom from the Modal footer to save the modal

     */
    async saveModal(){
        await this.click(await this.apply_action_button);
        reporter.addStep('info','Modal Saved Successfully');
    }

    /**
     * @function checkNoDashboardSelected It validates if the Empty workspace message has appeared on the screen
     * To validate no dashboards have been previously selected
     */
    async checkNoDashboardSelected(){
        const obtainedText = await this.empty_workspace_message.getText();
        chai.expect(obtainedText).to.be.equal(constants.pageObjects.cxOnePage.emptyWorkspaceMsg);
    }

     /**
     * @function explicitPause It executes a browser pause - explicit wait
     * @param {*} timer The amount of miliseconds you want to wait
     */
      async explicitPause(timer=constants.timers.short2){
        await browser.pause(timer);
    }

    /**
     * @function verifyNewDashboardButton It checks if one dashboard it gets overlap in the actual Browser capability so it checks if the new dashboard button is clickable, 
     * if not, It clicks on the more options button and the New Dashboard option from that menu
     */
    async verifyNewDashboardButton(){
        /**checking if the New Dashboard button can be clicked */
        if(await this.isClickable(await this.new_dashboard_button)){
            await this.clickCreateNewDashboard();
            return;
        }
        await browser.pause(constants.timers.short2);
        await this.clickDashboardMoreOptions();
        await this.clickNewDashboardMoreOptions();
    }
}

export default new CXonePage();
