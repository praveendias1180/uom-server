import fetch from "node-fetch";

const link = 'https://my-json-server.typicode.com/praveendias1180/json_server_demo/products'

fetch(link)
    .then(response =>  response.json())
    .then(data => console.log(data))
    .catch(e => console.error(e.message))
    .finally(() => console.log('Finished...'))