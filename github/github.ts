import { Octokit, App } from "octokit";

require('dotenv').config()


const octokit = new Octokit({ auth: process.env.GITHUB_KEY });

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
(async () => {
    const {
        data: { login },
    } = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s", login);
})()