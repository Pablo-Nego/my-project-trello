const fs = require('fs');
const path = require('path');

module.exports = (on, config) => {
  on('task', {
    writeFile({ fileName, content }) {
      const filePath = path.join('cypress', 'fixtures', fileName);
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
      return null;
    }
  });
};