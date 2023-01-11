/* // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
} */

/* 
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  const badgeUrl = `https://img.shields.io/badge/license-${license}-blue`;
  return `![License](${badgeUrl})`;
}

function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  const link = `https://choosealicense.com/licenses/${license}`;
  return `[${license}](${link})`;
}

function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  return `## License

${badge}

This project is licensed under the ${link} license.`;
} */

const gravatar = require('gravatar');

const readMe_size = 200;

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

function generateVideo({ youtube_id, name }) {
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
  const profilePhotoUrl = gravatar.url(data.email, { protocol: 'https', s: readMe_size });
  const licenseLink = getLicenseLink(data);

  return `
# ${data.name}
### *${data.heading}*
## 📄 Description
${data.description}
## ⚙️ Requirements
${data.requirements}
## 💻 Usage
${data.usage}
${video}
## 👨‍💻 Who made it?
[![${data.author}](${profilePhotoUrl})](${data.website} "${data.author} personal website")
**[${data.author}](${data.website})**, a highly passionate, focused; pragmatic software engineer 🧙‍♂️
## ⚖️ License
**${data.name}** is generously distributed under the *[${data.license}](${licenseLink})*.
`;
}

module.exports = generateMarkdown;