import axios from 'axios'

let URL = 'https://my-json-server.typicode.com/typicode/demo/posts';
// let URL = 'http://109.251.227.52:9000/user/confirmation/';;
// let URL = 'http://192.168.1.13:8000/vlad/test/';

export default
axios.create({
        baseURL: URL,
        timeout: 5000,
        headers: {
            // 'Access-Control-Allow-Origin': '*',
            // 'Content-Type': 'application/json',
            // 'withCreditnails': 'true'
        }
    })
    .post(URL)
    .then(function(response) {
        // console.log(test + 'see this')
        console.log('!!!!');
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })