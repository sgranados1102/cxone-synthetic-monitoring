import Page from "./page"
import constants from '../../data/constants.json';
class HomePage extends Page{
    
    constructor(){
        super();
    }

    /**PROFILE OPTIONS **/
    get homepage_profile() {return $('.navProfileImage > img') }
    get homepage_profile_avatar() {return $('ng-click="$ctrl.headerMenuOpen = false; $ctrl.toggleUserProfile($event)"') }
    get homepage_profile_language() {return $('ng-click="$ctrl.submenuOpen = !$ctrl.submenuOpen"') }
    get homepage_profile_submit_feedback() {return $('ng-click="$ctrl.headerMenuOpen = false; $ctrl.openSubmitFeedback()"') }
    get homepage_profile_logout() {return $('a[ng-click="$ctrl.logout()"]') }
    /**SIDEBAR MAIN OPTIONS **/
    get sidebar_expand() {return $('.navbar-toggler-container') }
    get sidebar_search() {return $('#navigationSearch') }
    get sidebar_home() {return $('#sidebarMenuItem-Home > .navMenuGroupText') }
    /**CXOne New options */
    get sidebar_dashboard_cxone_dashboard() {return $('#sidebarSubmenuItem-CXOne_Dashboard')};
    get sidebar_dashboard_cxone_manage_dashboards() {return $('#sidebarSubmenuItem-CXOne_Manage_Dashboards')};
    /**User options */
    get sidebar_user_settings_users(){return $('#sidebarSubmenuItem-Users')}

    /**HOME PAGE WEB ACTIONS */

    /**
     * @function toggleSideBar It toggles the default sidebar view - it expands the sidebar
    
     */
   async toggleSideBar(){
        await this.click(await this.sidebar_expand);
        await browser.pause(constants.timers.short);
    }

    /**
     * @function searchPage It types into the Homepage search bar to narrow down page results and make selection easier
     * @param {String} pageName The page name you want to search.
     */
    async searchPage(pageName){
        await this.typeInto(await this.sidebar_search,pageName);
        await browser.pause(constants.timers.short);
    }

    /**
     * @function clickOnPageByCategory It clicks on a specific page based on the Category name and Page name you provide to it
     * @param {String} category The main page under you will look the sub page
     * @param {String} pageName the Page Name you want to click
     */
    async clickOnPageByCategory(category="",pageName=""){
        const formattedCategory = category.toLowerCase().split(' ').join('_');
        const formattedPageName = pageName.toLowerCase().split(' ').join('_');
        await this.click(await this[`sidebar_${formattedCategory}_${formattedPageName}`]);
        await browser.pause(constants.timers.medium);
    }

    /**
     * @function clickOnProfileMenu it Clicks on the Profile menu located at the Profile Picture

     */
    async clickOnProfileMenu(){
        await this.click(await this.homepage_profile);

    }

    /**
    * @function clickOnLogoutOption It clicks on the Logout option to end the user session
    */
     async clickOnLogoutOption(){
        await this.click(this.homepage_profile_logout);

    }
    

}

export default new HomePage();