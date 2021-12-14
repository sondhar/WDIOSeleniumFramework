class SignInPage {

    
    get name() { return $("//input[@id='form-validation-field-0']") }
    get email() { return $("//input[@id='form-validation-field-1']") }
    get telephone() { return $("//input[@id='form-validation-field-2']") }
    get country() { return $("//input[@name='country']") }
    get company() { return $("//input[@name='company']") }
    get message() { return $("//textarea[@name='message']") }

    get feedbackText() { return $("//div[@class='formErrorContent']") }

    async homePageLink() { await browser.url("http://www.seleniumframework.com/Practiceform/"); }
}
export default new SignInPage()