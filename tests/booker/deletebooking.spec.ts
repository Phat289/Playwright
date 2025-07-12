import {test, expect} from '@playwright/test';

test('detete booking', async ({request}) => {
    // First, create a booking to delete
    const createResponse = await request.post('https://restful-booker.herokuapp.com/booking', {
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

    expect(createResponse.status()).toBe(200);
    
    const createData = await createResponse.json();
    expect(createData.bookingid).toBeDefined();
    console.log('Booking ID:', createData.bookingid);

    // Now delete the created booking
    const deleteResponse = await request.delete(`https://restful-booker.herokuapp.com/booking/${createData.bookingid}`, {
        headers: {
            'Authorization': `Bearer your_auth_token_here` // Replace with actual auth token if needed
        },
        failOnStatusCode: false
    });

    expect(deleteResponse.status()).toBe(201); // 201 Created is expected for successful deletion

    console.log('Booking deleted successfully');
});