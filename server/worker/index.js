var CronJob = require('cron').CronJob;

// Importing tasks
var gitJob = require('./tasks/github-jobs');

var job = new CronJob('*/1 * * * *', gitJob, null, true);

job.start();