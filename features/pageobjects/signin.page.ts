import report from "@wdio/allure-reporter";

class SignInPage {


    get name() { return $("//input[@class='validate[required]']") }
    get email() { return $("//input[@class='validate[required,custom[email]]']") }
    get telephone() { return $("//input[@class='validate[required,custom[phone]]']") }
    get country() { return $("//input[@name='country']") }
    get company() { return $("//input[@name='company']") }
    get message() { return $("//textarea[@name='message']") }
    get submitButton() { return $("//a[@class='dt-btn dt-btn-m dt-btn-submit']") }
    get feedbackText() { return $("//div[@class='formErrorContent']") }
    get mergedDrag() { return $("#dragb>#draga") }
    get alertBox() { return $("//button[@id='alert']") }
    get newWindow() { return $("//button[@onclick='newBrwWin()']") }
    get newMessageWindow() { return $("//button[@onclick='newMsgWin()']") }
    get newTab() { return $("//button[@onclick='newBrwTab()']") }
    get getMessage() { return $("//body[text()='This message window is only for viewing purposes']") }
    get pageHeader() { return $("//h2[@class='wpb_heading']") }
    async homePageLink() {
        await browser.url("http://www.seleniumframework.com/Practiceform/");
    }
    async submitButtonClick() {
        await this.submitButton.click();
        report.addStep(`Click Registration : ${await this.submitButton.selector}`)
    }
    async alertBoxClick() {
        await this.alertBox.click();
        report.addStep(`Click Registration : ${await this.alertBox.selector}`)
    }
    async newWindowClick() {
        await this.newWindow.click();
        report.addStep(`Click Registration : ${await this.newWindow.selector}`)
    }
    async newMessageWindowClick() {
        await this.newMessageWindow.click();
        report.addStep(`Click Registration : ${await this.newMessageWindow.selector}`)
    }
    async newBrowserTabClick() {
        await this.newTab.click();
        report.addStep(`Click Registration : ${await this.newTab.selector}`)
    }
    async setName(firstName: string) {
        await this.name.setValue(firstName);
        report.addStep(` Set the name as : ${firstName}`)
    }
    async setEmail(email: string) {
        await this.email.setValue(email);
        report.addStep(` Set the email as : ${email}`)
    }
    async setTelephone(telephone: string) {
        await this.telephone.setValue(telephone);
        report.addStep(` Set the telephone as : ${telephone}`)
    }
    async setCountry(country: string) {
        await this.country.setValue(country);
        report.addStep(` Set the country as : ${country}`)
        
    }
    async setCompany(companyName: string) {
        await this.company.setValue(companyName);
        report.addStep(` Set the Company Name as : ${companyName}`)
    }
    async setMessage(message: string) {
        await this.message.setValue(message);
        report.addStep(` Set the message as : ${message}`)
    }
}
export default new SignInPage()