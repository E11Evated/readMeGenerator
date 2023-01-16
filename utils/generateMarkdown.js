/* const gravatar = require('gravatar');

const readMe_size = 200;

function getBadgeLink({ license }) {
  switch (license) {
    case 'MIT':
      return '[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)';
    case 'GPL':
        return '[![License](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl.html)';
    case 'Apache':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)';
      default:
      return '';
  }
}

function getLicenseLink({ license }) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';

    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl.html';

    case 'ISC':
      return 'https://opensource.org/licenses/ISC';

    case 'MPL':
      return 'https://www.mozilla.org/en-US/MPL/';

    case 'AGPL':
      return 'https://www.gnu.org/licenses/agpl.html';

    default:
      return 'https://opensource.org/licenses/';
  }
}

function generateVideo({ youtube_id}) {
  if (youtube_id) {
    return `
### Video -
[![Youtube Video, how to use Read me Generator](https://img.youtube.com/vi/${youtube_id}/0.jpg)](https://www.youtube.com/watch?v=${youtube_id})
`;
  }

  return '';
}

function generateMarkdown(data) {
  const video = generateVideo({ youtube_id: data.video, name: data.title });
  const profilePhotoUrl = gravatar.url(data.email, { protocol: 'https', s: readMe_size });
  const licenseLink = getLicenseLink(data);
  const badgeLink = getBadgeLink({ license: data.license });
  return `# ${data.name}

### *${data.heading}*


<h2 id="license">⚖️ License</h2>
${badgeLink}
**${data.name}** is generously distributed under the *[${data.license}]
(https://opensource.org/licenses/${data.license.toLowerCase()})*.(${licenseLink})*.

## 📝 Table of Contents
- <a href="#description">Description</a>
- <a href="#requirements">Requirements</a>
- <a href="#usage">Usage</a>
- <a href="#author">Who made it?</a>
- <a href="#license">License</a>
- <a href="#contact">Questions</a>

<h2 id="description">📄 Description</h2>
${data.description}


<h2 id="requirements">⚙️ Requirements</h2>
${data.installation}


<h2 id="usage">💻 Usage</h2>
${data.usage}
${video}


<h2 id="author">👨‍💻 Who made it?</h2>
(${profilePhotoUrl})
[![${data.author}] (${data.website} "${data.author} personal website")
**[${data.author}](${data.website})**, a highly passionate, focused; pragmatic software engineer 🧙‍♂️
More details about the license can be found [here](${licenseLink}).


<h2 id="contact">❓Questions</h2>
If you have any questions, you can reach me at: ${data.contact}
`;
}

module.exports = generateMarkdown; */
const gravatar = require('gravatar');

const readMe_size = 200;

function getBadgeLink({ license }) {
  switch (license) {
    case 'MIT':
      return '[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)';
    case 'GPL':
        return '[![License](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl.html)';
    case 'Apache':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)';
      default:
      return '';
  }
}

function getLicenseLink({ license }) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';

    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl.html';

    case 'ISC':
      return 'https://opensource.org/licenses/ISC';

    case 'MPL':
      return 'https://www.mozilla.org/en-US/MPL/';

    case 'AGPL':
      return 'https://www.gnu.org/licenses/agpl.html';

    default:
      return 'https://opensource.org/licenses/';
  }
}

function generateVideo({ youtube_id}) {
  if (youtube_id) {
    return `
### Video -
[![Youtube Video, how to use Read me Generator](https://img.youtube.com/vi/${youtube_id}/0.jpg)](https://www.youtube.com/watch?v=${youtube_id})
`;
  }

  return '';
}

function generateMarkdown(data) {
  const video = generateVideo({ youtube_id: data.video });
  const profilePhotoUrl = gravatar.url(data.email, { protocol: 'https', s: readMe_size });
  const badgeLink = getBadgeLink({ license: data.license });
  const licenseLink = getLicenseLink({ license: data.license });
  return `# ${data.name}

### *${data.heading}*


## ⚖️ License

${badgeLink}
**Read me Generator** is generously distributed under the *[MIT](https://opensource.org/licenses/mit)* license.

## 📝 Table of Contents
- <a href="#description">Description</a>
- <a href="#requirements">Requirements</a>
- <a href="#usage">Usage</a>
- <a href="#author">Who made it?</a>
- <a href="#license">License</a>
- <a href="#contact">Questions</a>

<h2 id="description">📄 Description</h2>
${data.description}


<h2 id="requirements">⚙️ Requirements</h2>
${data.installation}


<h2 id="usage">💻 Usage</h2>
${data.usage}
${video}


<h2 id="author">👨‍💻 Who made it?</h2>
<img src="${profilePhotoUrl}" alt="Gravatar Profile Picture" width="${readMe_size}" height="${readMe_size}">

<a href="${data.website}" target="_blank">**${data.username}**</a>, a highly passionate, focused; pragmatic software engineer 🧙‍♂️

<h2 id="license">⚖️ License</h2>
More details about the license can be found [here](${licenseLink})(${data.license}).


<h2 id="contact">❓Questions</h2>
${data.contact}
`;
}
  module.exports = generateMarkdown;