/**
* Build homepage markdown
*/

const path = require('path');
const fs = require('fs');
const marked = require('marked');

let cache = '';

const build = markdown => `
  <html>
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
      <style>body{font-family: arial;padding: 20px;}</style>
    </head>
    <body>
      ${marked(markdown)}
    </body>
  </html>
  `;

const send = () => {
  if (cache) return cache;
  cache = build(process.env.SERVICE_NAME || 'Missing Service Name \n===');

  fs.readFile(path.join(__dirname, '../readme.md'), (err, data) => {
    if (err) return console.error('Missing Service Contract (README.md)');
    cache = build(data.toString());
    return '';
  });

  return cache;
};

send();

module.exports = send;
