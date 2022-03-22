import fetch from 'cross-fetch';

require('dotenv').config();

async function main() {
    const res = await fetch('https://api.github.com/users/drinkredwine', {
        method: 'GET',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Authorization': `token ${process.env.SECRET}`
        }
    });
    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    console.log(await res.json());
}

main();
