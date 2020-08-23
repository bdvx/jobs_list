var CronJob = require('cron').CronJob;

// Github Jobs fetch
const fetchGithub = require('./tasks/fetch-github-jobs.js');

const githubJob = new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles')

githubJob.start();
