import { Locator, Page } from "@playwright/test";

export class CheckboxPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.checkbox1 = this.page.locator('input[type="checkbox"]');.nth(0);
        this.checkbox2 = this.page.locator('input[type="checkbox"]').nth(1);
    }

    async goto() {
        await this.page.goto("/checkboxes");
    }

    async checkCheckbox1() {
        await this.checkbox1.check();
    }
    async checkCheckbox2() {
        await this.checkbox2.check();
    }
    async uncheckCheckbox1() {
        await this.checkbox1.uncheck();
    }
    async uncheckCheckbox2() {
        await this.checkbox2.uncheck();
    }
    async isCheckbox1Checked(): Promise<boolean> {
        return await this.checkbox1.isChecked();
    }
    async isCheckbox2Checked(): Promise<boolean> {
        return await this.checkbox2.isChecked();
    }
}