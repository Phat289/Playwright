import { test, expect } from '@playwright/test';

test('TC05 - Validate person with largest due in table 1', async ({ page }) => {
    await page.goto("/tables");
    const table1 = await 
    page.locator("table#table1");
    const rows =await table1.locator("tbody tr");
    // convert table => json array
    // [
    // {firstName: "John", lastName: "Doe", due: "$50.00"},
    //  {firstName: "Jason", lastName: "Doe", due: "$100.00"  }
    // ]
    let persons: { lastName: string | null; firstName: string | null; due: string | number | null }[] = [];

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const cells =  await row.locator("td");
        persons.push({
            lastName: await cells.nth(0).textContent(),
            firstName: await cells.nth(1).textContent(),
            due: await cells.nth(3).textContent()
        });
  
    }
    console.log(persons);
    persons.map(person => {
        person.due = parseFloat(person.due.replace('$', ''));
    });
    console.log(persons);

    //find max due person
    const maxDuePerson = persons.reduce((max, person) => {
        return person.due > max.due ? person : max;
    }
    , persons[0]);
    console.log(maxDuePerson);
    const { firstName, lastName } = maxDuePerson;
    expect(`${firstName} ${lastName}`).toBe("Jason Doe");

});

test("verify min due person are John Smith and Tim Conway", async ({ page }) => {
    await page.goto("/tables");
    const table1 = await page.locator("table#table1");
    const rows =await table1.locator("tbody tr");
     let persons: { lastName: string | null; firstName: string | null; due: string | null }[] = [];

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const cells =  await row.locator("td");
        persons.push({
            lastName: await cells.nth(0).textContent(),
            firstName: await cells.nth(1).textContent(),
            due: await cells.nth(3).textContent()
        });
    }
    //find min due value
    persons.map(person => {
        person.due = parseFloat(person.due.replace('$', ''));}
    );
    const minDueValue = Math.min(...persons.map(person => person.due));
    console.log(minDueValue);
    //find list of person with min due value
    const minDueListPerson = persons
    .filter(person => person.due === minDueValue)
    .map(person => `${person.firstName} ${person.lastName}`);
   expect(minDueListPerson).toEqual(["John Smith", "Tim Conway"]);
    
})
