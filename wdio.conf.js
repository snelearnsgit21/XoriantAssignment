exports.config = {
    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    appium: {
      command: 'appium',
    },
  
    // ====================
    // Specify Test Files
    // ====================
    specs: ['./features/*.feature'],
  
    // ====================
    // Capabilities
    // ====================
    capabilities: [
      {
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '11.0',
        'appium:app': '/apks/eribank.apk',
        'appium:automationName': 'UiAutomator2',
        'appium:appActivity': 'com.experitest.ExperiBank.LoginActivity',
        'appium:appPackage': 'com.experitest.ExperiBank',
      },
      {
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 12 Simulator',
        'appium:platformVersion': '15.0',
        'appium:app': '/path/to/your/app.app',
        'appium:automationName': 'XCUITest',
      },
    ],
  
    // ====================
    // Cucumber Configuration
    // ====================
    framework: 'cucumber',
    cucumberOpts: {
      require: ['./step-definitions/*.js'],
      tagExpression: '@login',  // Specify the tag for login scenarios
    },
  
    // ====================
    // Hooks
    // ====================
    beforeScenario: function () {
      // Any setup needed before each scenario
    },
  
    // ====================
    // Reporters
    // ====================
    reporters: ['spec'],
  
    // ====================
    // Options
    // ====================
    logLevel: 'info',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
  
    // ====================
    // Hooks
    // ====================
    before: function () {
      // Hook to be executed before running tests
    },
  };
  