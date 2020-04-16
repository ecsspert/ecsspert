const { execSync } = require('child_process');
const date = require('date-and-time');
const now = new Date();
const timestamp = date.format(now, 'YYYY_MM_DD__HH_MM_SS');

execSync(`rm -rfd backups/dist && mv dist backups/dist && tar -cf backups/${timestamp}.tar ./backups/dist && rm -rfd backups/dist && git add backups && git commit -m 'backup'`);