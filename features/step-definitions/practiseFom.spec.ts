import { Given, When, Then } from "@wdio/cucumber-framework";
import signInPage from "../pageobjects/signIn.Page";
import myDetails from "../testdata/myDetails.json";
import faker from "faker";

Given(/^We are in the PractiseForm Page of SeleniumFramework Website$/, async () => {
    await signInPage.homePageLink();
    await browser.maximizeWindow();
});
When(/^I enter the details in the given form$/, async () => {
    await signInPage.name.setValue(faker.name.firstName());
    await signInPage.email.setValue(faker.internet.email());
    await signInPage.telephone.setValue(myDetails.telephone);
    await signInPage.country.setValue(faker.address.country());
    await signInPage.company.setValue(faker.company.companyName());
    await signInPage.message.setValue(faker.lorem.paragraph());
    await signInPage.submitButton.click();
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
    await signInPage.alertBox.click();
});
Then(/^I should see alert text$/, async () => {
    await browser.acceptAlert();
});
When(/^I click on New Window Button$/, async () => {
    await signInPage.newWindow.click();
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
    await signInPage.newMessageWindow.click();
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
    await signInPage.newTab.click();
    browser.switchWindow('Selenium Framework | Selenium, Cucumber, Ruby, Java et al.');
});
Then(/^I should be navigated to a page having title as "([^\"]*)\"$/, async (headerUrl) => {
    await expect(browser).toHaveUrl(headerUrl);
});
