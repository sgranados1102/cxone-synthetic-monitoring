
import Page from "./page";
class LoginPage extends Page{

    constructor(){
        super();
    }

    get username_box() {return $('#ContentPlaceHolderMain_txtUsername') }
    get password_box() {return $('#ContentPlaceHolderMain_txtPassword') }
    get login_button() {return $('#ContentPlaceHolderMain_btnLogin') }
    get forgot_link() {return $('.loginForgotPassword') }
    get error_message() {return $('#ContentPlaceHolderMain_lblError')}

    /**
     * @function openURL It uses the Parent method to navigate to a specific URL and it opens it within the actual browser window
     * @param {*} siteURL URL you want to open within the Browser capability
     */
    async openURL(siteURL){
        await this.navigateTo(siteURL);

    }
    /**
     * @function enterUsername It sets the Username Value into the Username input field within the Login Page
     * @param {*} username The username you want to set.
     */
   async enterUsername(username = ''){
        await this.typeInto(await this.username_box,username);
    }
    /**
     * @function enterPassword It sets the Password Value into the Password input field within the Login Page
     * @param {*} password The password you want to set.
     */
    async enterPassword(password = ''){
       await  this.typeInto(await this.password_box,password);

    }

    /**
     * @function clickLoginButton It clicks on the Login button within the Login Page
     */
    async clickLoginButton(){
        await this.click(this.login_button);
    }
}

export default new LoginPage();
