// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  async onComplete() {
    try {
      console.log('Retrieving coverage...');
      const coverage = await browser.executeScript('return JSON.stringify(window.__coverage__);');
      if (coverage) {
        console.log(`Coverage retrieved (${coverage.length} bytes)`);
        const fs = require('fs');
        const path = require('path');
        fs.mkdirSync(path.join(__dirname, '..', '.nyc_output'));
        fs.writeFileSync(path.join(__dirname, '..', '.nyc_output', 'out.json'), coverage);
        const NYC = require('nyc');
        const nycInstance = new NYC({
          cwd: path.join(__dirname, '..'),
          reportDir: 'coverage-e2e',
          reporter: ['lcov', 'json', 'text-summary']
        });
        nycInstance.report();
        nycInstance.cleanup();
        console.log("Coverage saved successfully!");
      } else {
        console.log("No coverage data!");
      }
    } catch (error) {
      console.log("Error in onComplete:", error);
      process.exit(1);
    }
  }
};