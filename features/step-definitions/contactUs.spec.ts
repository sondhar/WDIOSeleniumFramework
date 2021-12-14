import { Given, When, Then } from "@wdio/cucumber-framework";
import signInPage from "../pageobjects/signIn.Page";
import signUp from "../testdata/myDetails.json"

Given(/^We are in the PractiseForm Page of SeleniumFramework Website$/, async () => {
    await signInPage.homePageLink()
});
When(/^I enter the details in the given form$/, async () => {
    await signInPage.name.setValue(signUp.name);
    await signInPage.email.setValue(signUp.email);
    await signInPage.telephone.setValue(signUp.telephone);
    await signInPage.country.setValue(signUp.country);
    await signInPage.company.setValue(signUp.company);
    await signInPage.message.setValue(signUp.message);
});
Then(/^I should see text displayed as successfully submitted$/, async () => {
    await expect(signInPage.feedbackText).toHaveText("Feedback has been sent to the administrator");
});