

/**
 * Page Class - All the new POM implementations will inherit the same interface and methods from this parent class
 * those can be override if needed
 *
 * Objective: Centralize all the common methods a Webpage has
 */
 class Page {
    constructor() {}
  
    /**
     * @function navigateTo It executes the main browser method to open a specific URL within the actual capability
     * @param {String} path the URL path you want to pass to the Browser object
     */
    async navigateTo(path) {
      await browser.url(path);
      await browser.maximizeWindow();
    }
  
    /**
     * @function reloadPage Refresh command causes the browser to reload the page in current top-level browsing context.
     * @returns {Object}
     */
   async reloadPage(){
      return await browser.refresh();
    }
  
    /**
     * @function click It executes the Browser action of clicking on a specific WebDriver IO element
     * @param {WebdriverIO.Element} element The WDIO element you want to execute the Click action
     */
    async click(element) {
      if (!element) throw Error("No element was provided");
      await element.waitForExist();
      await element.click();
    }
  
    /**
     * @function typeInto It executes the setValue function into a specific WebdriverIO element
     * @param {WebdriverIO.Element} element The WDIO element you want to execute the Click action
     * @param {String} text The text you want to set into that element
     */
   async typeInto(element, text = "") {
      if (!element) throw Error("No element was provided");
      await element.waitForClickable();
      await element.setValue(text);
    }
  
    /**
     * @function hoverElement It hovers a specific WebDriverIO Element, whether is to execute a subsequent action, like a hidden click, hidden message
     * validation, etc.
     * @param {WebdriverIO.Element} element The WDIO element you want to execute the Hover action 
     */
   async hoverElement(element) {
      if (!element) throw Error("No element was provided");
      await element.waitForDisplayed();
      await element.moveTo();
    }
  
    /**
     * @function selectDropdownOption It executes the process of selecting an option within a Select Input
     * @param {WebdriverIO.Element} element The WDIO element you want to execute the select action 
     * @param {Int} index The index you want to pass to the select element
     */
    async selectDropdownOption(element, index) {
      if (!element) throw Error("No element was provided");
      await element.waitForDisplayed();
      await element.selectByIndex(index);
    }
  
    /**
     * @function inputKeys It executes the Browser capability method of sending keyboard key inputs 
     * @param {Array<String>} keys The Array of key inputs you want to sent. for reference: {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values | Input Key Values}
     */
    async inputKeys(keys) {
      if (!keys) throw Error("No Keyboard Keys were provided");
      await browser.keys(keys);
    }
  
    /**
     * @function waitForElementClickable It waits until an element is clickable and can be executed some following Browser actions
     * @param {WebdriverIO.Element} element the WDIO Element you want to wait on
     */
    async waitForElementClickable(element) {
      if (!element) throw Error("No element was provided");
     await element.waitForClickable();
    }
  
    /**
     * @function takeScreenshot It executes the Browser saveScreenshot function to save a screenshot of the actual capability view
     * @param {String} screenshotPathname  Path name you want to set fo your screenshot
     */
    async takeScreenshot(screenshotPathname) {
      return await browser.saveScreenshot(`${process.cwd()}/${screenshotPathname}`);
    }
  
    /**
     * @function isClickable It checks if the given element is clickable to continue executing actions over it.
     * @param {WebdriverIO.Element} element Web Driver IO element you want to pass
     * @returns {Boolean} A boolean determing if the Element is clickable or not
     */
    async isClickable(element){
      if (!element) throw Error("No element was provided");
      return await element.isClickable();
    }
  
    /**
     * @function explicitPause It executes the Browser explicit wait methods on the Current capability for the content to load
     * @param {Int} miliseconds The amount of miliseconds you want to stop the execution
     */
    async explicitPause(miliseconds){
      await browser.pause(miliseconds)
    }
  }
  
  export default Page;
  