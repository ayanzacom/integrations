import { Octokit, App } from "octokit";

require('dotenv').config()

const octokit = new Octokit({ auth: process.env.SECRET });

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
(async () => {
    const response
        = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s", response.data.login);
    console.log(response.data)
})();

// (async () => {
//     const response = await octokit.rest.issues.list({
//     })
//     console.log(response)
// })()

// (async () => {
//     const orgs = await octokit.rest.orgs.list()
//     console.log(orgs)
// })()