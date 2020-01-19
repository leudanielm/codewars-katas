const fs = require('fs');
const path = require('path');
const solutions = require('./solutions.json');

const getExtensionFromType = type => {
  return ({
    'javascript': 'js',
    'c#': 'cs',
    'sql': 'sql'
  })[type];
};

const getCommentPrefixFromType = type => {
  return ({
    'javascript': '// ',
    'c#': '// ',
    'sql': '-- '
  })[type];
}

solutions.forEach(({ title, link, type, code }) => {
  const commentedCode = `${getCommentPrefixFromType(type)}${link}\n\n${code}\n`;
  fs.writeFileSync(
    path.resolve('..', 'katas', `${title.replace('/', '-')}.${getExtensionFromType(type)}`),
    commentedCode,
    { encoding: 'utf8' }
  );
});