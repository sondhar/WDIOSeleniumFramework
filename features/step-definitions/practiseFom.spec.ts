import { Given, When, Then } from "@wdio/cucumber-framework";
import signInPage from "../pageobjects/signIn.Page";
import myDetails from "../testdata/myDetails.json";
import faker from "faker";

Given(/^We are in the PractiseForm Page of SeleniumFramework Website$/, async () => {
    await signInPage.homePageLink();
    await browser.maximizeWindow();
});
When(/^I enter the details in the given form$/, async () => {
    await signInPage.setName(faker.name.firstName());
    await signInPage.setEmail(faker.internet.email());
    await signInPage.setTelephone(myDetails.telephone);
    await signInPage.setCountry(faker.address.country());
    await signInPage.setCompany(faker.company.companyName());
    await signInPage.setMessage(faker.lorem.paragraph());
    await signInPage.submitButtonClick();
});
Then(/^I should see text displayed as "([^\"]*)\"$/, async (submittedText) => {
    await expect(signInPage.feedbackText).toHaveText(submittedText);
});
When(/^I drag element A to element B$/, async () => {
    const elem = await $('#draga')
    const target = await $('#dragb');
    await elem.dragAndDrop(target);
});
Then(/^I should find the merged element$/, async () => {
    await expect(signInPage.mergedDrag).toBeExisting();
});
When(/^I click on alert box$/, async () => {
    await signInPage.alertBoxClick();
});
Then(/^I should see alert text$/, async () => {
    await browser.acceptAlert();
});
When(/^I click on New Window Button$/, async () => {
    await signInPage.newWindowClick();
    const newWindow = await browser.getWindowHandles()
    await browser.switchToWindow(newWindow[1])
});
Then(/^I should be navigated to "([^\"]*)\"$/, async (baseUrl) => {
    await expect(browser).toHaveUrl(baseUrl);
    const newWindow = await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(newWindow[0])
});
When(/^I click on New Message Window Button$/, async () => {
    await signInPage.newMessageWindowClick();
    const newWindow = await browser.getWindowHandles()
    await browser.switchToWindow(newWindow[1])
});
Then(/^I should see message as \"([^\"]*)\"$/, async (sampleMessage) => {
    await expect(signInPage.getMessage).toHaveText(sampleMessage)
    const newWindow = await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(newWindow[0])
});
When(/^I click on New Browser Tab$/, async () => {
    await signInPage.newBrowserTabClick();
    browser.switchWindow('Selenium Framework | Selenium, Cucumber, Ruby, Java et al.');
});
Then(/^I should be navigated to a page having title as "([^\"]*)\"$/, async (headerUrl) => {
    await expect(browser).toHaveUrl(headerUrl);
});
