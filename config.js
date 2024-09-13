// cypress.config.js
module.exports = {
  e2e: {
    baseUrl: 'https://api.trello.com/1',
    env: {
      apiKey: process.env.TRELLO_API_KEY,
      apiToken: process.env.TRELLO_API_TOKEN
    },
    setupNodeEvents(on, config) {
      // Implement Node event listeners here
    },
  },
};
