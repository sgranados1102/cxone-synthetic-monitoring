exports.config = {
  //
  specs: [
    "./test/specs/cxone.dashboard.core.test.js",
],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 1,

  capabilities: [
    {
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: [
          "--window-size=1920,1080",
          "--enable-automation",
          "--disable-gpu",
          "--headless",
        ],
      },
    },
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",

  bail: 0,

  baseUrl: "http://localhost",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  services: ["chromedriver"],

  framework: "jasmine",

  reporters: [
    "spec",
    "dot",
    [
      "junit",
      {
        outputDir: "./jUnit-report",
        suiteNameFormat: /[^a-zA-Z0-9@]+/,
        outputFileFormat: function (options) {
          return `results-${options.cid}.${new Date().getTime()}.xml`;
        },
        addFileAttribute: true,
        errorOptions: {
          error: "message",
          failure: "message",
          stacktrace: "stack",
        },
      },
    ],
  ],

  //
  // Options to be passed to Jasmine.
  jasmineOpts: {
    helpers: [require.resolve("@babel/register")],
    defaultTimeoutInterval: 999999,
    //
    // The Jasmine framework allows interception of each assertion in order to log the state of the application
    // or website depending on the result. For example, it is pretty handy to take a screenshot every time
    // an assertion fails.
    expectationResultHandler: function (passed, assertion) {
      // do something
    },
  },

  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {String} cid worker id (e.g. 0-0)
   */
  beforeSession: function (config, capabilities, specs, cid) {
    global.cxoneURL = "https://automation-dev.clearviewportal.com";
  },

  /**
   * Function to be executed after a test (in Mocha/Jasmine only)
   * @param {Object}  test             test object
   * @param {Object}  context          scope object the test was executed with
   * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
   * @param {Any}     result.result    return object of test function
   * @param {Number}  result.duration  duration of test
   * @param {Boolean} result.passed    true if test has passed, otherwise false
   * @param {Object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
   */
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      await browser.takeScreenshot();
    }
    await browser.deleteAllCookies();
  },

};
