'use strict'

// successfully resolved
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I have succeeded');
    }, 1000)
})

myPromise.then(value => console.log(value));

// rejected
const mySecondPromise = new Promise((resolve, reject) => {
    if (false) {
        setTimeout(() => {
            resolve('I have succeeded');
        }, 1000);
    } else {
        reject('I have failed')
    }
});

mySecondPromise
    .then(value => console.log(value))
    .catch(rejectValue => console.log(rejectValue));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.log(error))

// import loadImagePromised
// from './load-image-promised'

// loadImagePromised('images/cat1.jpg')
//     .then((img) => {
//         let imgElement = 
//             document.createElement('img')
//         imgElement.src = img.src
//         document.body.appendChild(imgElement)
//     })

loadImageCallbacked('images/cat4.jpg',
    (error, img) => {
        let imgElement = 
            document.createElement('img')
        imgElement.src = img.src
        document.body.appendChild(imgElement)
    })