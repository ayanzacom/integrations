require('dotenv').config()

const { Client } = require('@notionhq/client');
const { search } = require('@notionhq/client/build/src/api-endpoints');

const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

(async () => {
    const response = await notion.search({
    });
    console.log(response);
})();


// (async () => {
//     const response = await notion.users.list();
//     console.log(response);
// })();


