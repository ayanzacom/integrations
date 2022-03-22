require('dotenv').config()

import { Client } from "@notionhq/client"
import { search } from "@notionhq/client/build/src/api-endpoints"
// const { Client } = require('@notionhq/client');
// const { search } = require('@notionhq/client/build/src/api-endpoints');

const notion = new Client({ auth: process.env.SECRET });

(async () => {
    const response = await notion.search({});
    console.log(response);
})();


(async () => {
    const response = await notion.users.list({});
    console.log(response);
})();


