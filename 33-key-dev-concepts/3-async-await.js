'use strict'

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const firstUser = users[0];
        console.log(firstUser);
        return fetch(
            'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
        );
    })
    .then(response => response.json())
    .then(posts => console.log(posts));

// Async/Await version
const myAsyncFunction = async () => {
    try {
        const usersResponse = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const users = await usersResponse.json();
        const firstUser = users[0];
        
        console.log(firstUser)
        
        const postsResponse = await fetch(
            'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
        );
    
        const posts = await postsResponse.json();
    
        console.log(posts)
    } catch (err) {
        console.log(err);
    }

}