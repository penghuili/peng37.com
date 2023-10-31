const chokidar = require('chokidar');
const { exec } = require('child_process');
console.log('Watching for file changes...');
const srcPath = './src';  // Directory to watch

const watcher = chokidar.watch(srcPath, {
  ignored: /(^|[/\\])\../, // ignore dotfiles
  persistent: true
});

watcher.on('change', (path) => {
  console.log(`File ${path} has been changed`);

  // Execute your script here. For example, a shell command:
  exec('npm run build', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
});

console.log(`Watching for file changes on ${srcPath}`);
