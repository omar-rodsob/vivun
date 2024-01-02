const { defineConfig } = require("cypress");




module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    videoCompression: false,
    videosFolder: 'cypress/videos',
    chromeWebSecurity: false,
    baseUrl:'https://jobs.lever.co/Vivun/a9f3f06e-72b7-4cc5-8391-78db76a75065/apply'
  },
});
