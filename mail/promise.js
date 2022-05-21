const promise = new Promise((resolve, reject) => {
    resolve('Success')
    // reject('Something wrong')
})
    .then(value => console.log(value))
    .catch(e => console.log('Error: ' + e))