import * as boxen from 'boxen';
import chalk from 'chalk';

// Define options for Boxen
const options = {
  borderStyle: 'round',
  margin: 1,
  padding: 1,
};

// Text + chalk definitions
const data = {
  github: chalk.cyan('https://github.com/swamikalagiri'),
  handle: chalk.cyan('swamikalagiri'),
  labelCard: chalk.white.bold('      Card:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelWork: chalk.white.bold('      Work:'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/swami-kalagiri/'),
  name: chalk.white('Swami R Kalagiri /'),
  npx: chalk.white('npx swamikalagiri'),
  twitter: chalk.cyan('https://twitter.com/swamikalagiri'),
  web: chalk.cyan('https://swamikalagiri.com'),
  work: chalk.white('FullStack Developer at JohnDeere'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline
  + githubing + newline + linkedining + newline + webing + newline + newline + carding;

export default chalk.greenBright(boxen(output, options));
