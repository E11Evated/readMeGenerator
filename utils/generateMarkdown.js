const gravatar = require('gravatar');
const size = 200;

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

function generateVideo({ youtube_id, name = 'My Project' }) {
  if (youtube_id) {
    return `
### Video - ${name}
[![Youtube Video, how to use ${name}](https://img.youtube.com/vi/${youtube_id}/0.jpg)](https://www.youtube.com/watch?v=${youtube_id})
`;
  }

  return '';
}

function generateMarkdown(data) {
  const video = generateVideo({ youtube_id: data.video, name: data.title });
  const profilePhotoUrl = gravatar.url(data.email, { s: size, r: 'pg', d: '404' });
  const licenseLink = getLicenseLink(data);
  const badgeLink = getBadgeLink({ license: data.license });
  return `
# ${data.name}
### *${data.heading}*
## ⚖️ License
${badgeLink}
**${data.name}** is generously distributed under the *[${data.license}]
(${data.license.toLowerCase()})*.(${licenseLink})*.
## 📝 Table of Contents
- <a href="#description">Description</a>
- <a href="#requirements">Requirements</a>
- <a href="#usage">Usage</a>
- <a href="#author">Who made it?</a>
- <a href="#license">License</a>
## 📄 Description
<a id="description"></a>
${data.description}
## ⚙️ Requirements
<a id="requirements"></a>
${data.installation}
## 💻 Usage
<a id="usage"></a>
${data.usage}
${video}
## 👨‍💻 Who made it?
<a id="author"></a>
[[${data.username}](${profilePhotoUrl})](${data.website} "${data.author} personal website")
**[${data.author}](${data.website})**, is a highly passionate, focused; pragmatic software engineer 🧙‍♂️
More details about the license can be found [here](${licenseLink}).
## ❓Questions
<a id="license"></a>
If you have any questions, you can reach me at: ${data.contact}
`;
}

module.exports = generateMarkdown;