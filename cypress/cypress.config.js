const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  projectId: 'API Trello',
  e2e: {
    supportFile: false,
    },
  },
);
