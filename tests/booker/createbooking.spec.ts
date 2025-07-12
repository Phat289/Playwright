import {test, expect} from '@playwright/test';

test('create booking', async ({request}) => {
    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
        data: {
            firstname: 'John',
            lastname: 'Doe',
            totalprice: 123,
            depositpaid: true,
            bookingdates: {
                checkin: '2023-10-01',
                checkout: '2023-10-10'
            },
            additionalneeds: 'Breakfast'
        },
        failOnStatusCode: false
    });

    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data.bookingid).toBeDefined();
    console.log('Booking ID:', data.bookingid);
});