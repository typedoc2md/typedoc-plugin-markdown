const spawn = require('cross-spawn');
const task = './tasks/example.js';
const options = { stdio: 'inherit' };

spawn('node', [task, '-t', 'markdown', '-o', 'typedoc-markdown'], options);
spawn('node', [task, '-t', 'markdown', '-p', 'bitbucket', '-o', 'typedoc-bitbucket/docs'], options);
spawn('node', [task, '-t', 'markdown', '-p', 'docusaurus', '-o', 'typedoc-docusaurus/docs/myapi'], options);
spawn('node', [task, '-t', 'markdown', '-p', 'gitbook', '-o', 'typedoc-gitbook/docs'], options);
spawn('node', [task, '-t', 'default', '-o', 'typedoc-default'], options);
