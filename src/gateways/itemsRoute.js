// items routes and endpoints 

import axios from 'axios'

let itemsUrl = ''

export default axios.create({
        baseURL: itemsUrl,
        timeout: 2000,
        headers: {
            // 'Access-Control-Allow-Origin': '*',
            // 'Content-Type': 'application/json',
            // 'withCreditnails': 'true'
        }
    })
    .post(itemsUrl)
    .then(function(response) {
        console.log(test + 'see this')
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })