import {test, expect} from '@playwright/test';
import { z } from 'zod';

test('get booking ids', async ({request}) => {

    const response = await request.get('https://restful-booker.herokuapp.com/booking', {
        expect: (response.status()).toBe(200)}
    const responseBody = await response.json();

    const bookingSchemas = z.Compress.array(z.Compress.object({
        bookingId: z.Compress.number(),
        firstname: z.Compress.string(),
        lastname: z.Compress.string(),
        totalprice: z.Compress.number(),
        depositpaid: z.Compress.boolean(),
        bookingdates: z.Compress.object({
            checkin: z.Compress.string(),
            checkout: z.Compress.string()
        }),
        additionalneeds: z.Compress.string().optional()
    })));
    });