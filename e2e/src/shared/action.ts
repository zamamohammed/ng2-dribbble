import {
    browser,
    ElementFinder,
    ExpectedConditions as waitFor,
    ExpectedConditions,
    ElementArrayFinder,
} from 'protractor';

export function click(locator: ElementFinder, title: string, errorString?: string, timeout: number = 1000) {
    console.log(`Clicking ${title}`);
    browser.wait(ExpectedConditions.presenceOf(locator));
    browser.wait(
        waitFor.elementToBeClickable(locator),
        timeout,
        errorString || `timed out waiting for ${title} to be clickable`);
    locator.click();
}


export function navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
}

export function count(locator: ElementArrayFinder, title: string) {
    console.log(`Counting ${title}`);
    return locator.count();
}

export function sleep(time: number, title = '') {
    const seconds = time / 1000;
    console.log('sleeping for', seconds, 's');
    browser.driver.sleep(time);
}
