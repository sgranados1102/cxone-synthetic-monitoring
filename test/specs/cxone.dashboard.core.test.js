import LoginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/home.page";
import CxonePage from "../pageObjects/cxone.dashboard.page";
import constants from '../../data/constants.json'
import Tools from "../pageObjects/tools";

import CxoneManageDashboardPage from "../pageObjects/cxone.manage.dashboard.page";


describe(`CXone - Synthetic Monitoring`, function(){

    it(`Create a new Dashboard with no Dashboard Previously created`, async function(){
        await LoginPage.openURL(cxoneURL);
        await LoginPage.enterUsername(constants.automationUser.username);
        await LoginPage.enterPassword(constants.automationUser.password);
        await LoginPage.clickLoginButton();
        //Verify page is ready for test
        await Tools.setEnvReadyForTesting();
        /**Accessing CXone Dashboard Page */
        await HomePage.searchPage('CXone Dashboard');
        await HomePage.clickOnPageByCategory('Dashboard','CXone Dashboard');
        /**Validate No Dashboards selected message */
        await CxonePage.checkNoDashboardSelected()
        /**Creating a new Dashboard */
        await CxonePage.verifyNewDashboardButton();
        await CxonePage.setDashboardName(constants.pageObjects.cxOnePage.settingsDashboardName);
        await CxonePage.setDashboardDescription(constants.pageObjects.cxOnePage.settingsDescription);
        await CxonePage.clickSaveNewDashboard();
        await LoginPage.openURL(constants.pageObjects.cxOnePage.homePage);
        await CxonePage.explicitPause(constants.timers.short2);
        /**Accessing CXone Dashboard Page */
        await HomePage.searchPage('CXone Manage Dashboards');
        await HomePage.clickOnPageByCategory('Dashboard','CXone Manage Dashboards');
        await CxoneManageDashboardPage.clickOnManageDashboardTab('All');
        await CxoneManageDashboardPage.searcDashboard(constants.pageObjects.cxOnePage.settingsDashboardName);
        await CxoneManageDashboardPage.clickOnDeleteDashboardButton();
        await CxoneManageDashboardPage.clickOnDeleteDashboardConfirm();
    });
    increment ++;
});