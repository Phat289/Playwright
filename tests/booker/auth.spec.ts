import {test as baseTest, expect} from '@playwright/test';

test('creat auth token', async ({request}) => {
    await request.post('https://restful-booker.herokuapp.com/auth', 
        data: {
            username: 'admin',
            password: 'password123'
        },
        failOnStatusCode: false
     )
    .then(response => {
        expect(response.status()).toBe(200);
        return response.json();

    }).then(data => {
        expect(data.token).toBeDefined();
        console.log('Auth token:', data.token);
    })
    
});