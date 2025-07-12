import { test, expect } from './fixtures/auth.fixture';

test('verify update booking - checking date', async ({ request, token, bookingId }) => {
    // A: Action call request to update booking
    const response = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
        data: {
            firstname: 'Ha',
            lastname: 'Do',
            totalprice: 150,
            depositpaid: true,
            bookingdates: {
                checkin: '2025-07-10',
                checkout: '2025-07-12'
            },
            additionalneeds: 'Updated needs'
        },
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `token=${token}` // Include the auth token in the request headers
        }
    })

    // Asert: Verify the response status and body
    expect(response.status()).toBe(200);
    const responseBody = await response.json();

    expect(responseBody).toEqual({
        firstname: 'Ha',
        lastname: 'Do',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
            checkin: '2025-07-10',
            checkout: '2025-07-12'
        },
        additionalneeds: 'Updated needs'
    });
});