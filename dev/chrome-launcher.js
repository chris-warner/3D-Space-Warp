// Set Permissions for script then launch.  
const fs = require('fs');
var proc = require('child_process');

//Set permissions
fs.chmod ('./chrome-launcher.sh', 0777, (data)=> { console.log(['chrome-launcher.js: Setting permissions for chrome-launcher.sh']) });

//Launch script
console.log('chrome-launcher.js: Launching Chrome with CORS restrictions disabled.')
proc.exec('./chrome-launcher.sh');