const redis = require('../../helper/redishelper');
const logger = require('../../helper/logger');
const axios = require('axios');

const giturl = 'https://jobs.github.com/positions.json'

module.exports = getGitjobs = async () => {

    let resultCount = 1, page = 1;
    const jobresult = []

    // Retreiving jobs
    try{
        while (resultCount > 0) {
            const jobs = await axios.get(`${giturl}?page=${page}`);
            jobresult.push(...jobs.data);
            resultCount = jobs.data.length;
            page++;
        }
       logger.info(`Retreived ${jobresult.length} total`);

       // Filtering by position, remote
       let isRemote = true;

       const remoteJobs = jobresult.filter(job => {
           const location = job.location.toLowerCase();
           if(location.includes('remote')){
               return true;
           }
           return false;
       });
       logger.info(`Got ${remoteJobs.length} remote jobs`);
       const saved = await redis.setAsync("githubremotejobs", JSON.stringify(remoteJobs));
       logger.info(saved);
    } catch (e){
        logger.error(`Redis error: ${e}`)
    }

    
}