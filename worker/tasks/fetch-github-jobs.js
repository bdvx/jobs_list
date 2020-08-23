var fetch = require('node-fetch');


const baseURL = 'https://jobs.github.com/positions.json';

/*
Github jobs is passing only 1 page(first by default)
So we're gonna iterate until we get empty page
*/

async function fetchGithubJobs() {
    
    let resultLength = 1;
    let page = 0;
    const allJobs = [];

    while(resultLength > 0) {
        const res = await fetch(`${baseURL}?page=${page}`);
        const jobs = await res.json();
        resultLength = jobs.length;
        allJobs.push(...jobs);
        console.log('got jobs', resultLength);
        page++;
    }

    console.log('allJobs', allJobs);


}

fetchGithubJobs();

module.exports = fetchGithubJobs;

