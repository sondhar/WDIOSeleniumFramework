class SignInPage {

    
    get name() { return $("//input[@class='validate[required]']") }
    get email() { return $("//input[@class='validate[required,custom[email]]']") }
    get telephone() { return $("//input[@class='validate[required,custom[phone]]']") }
    get country() { return $("//input[@name='country']") }
    get company() { return $("//input[@name='company']") }
    get message() { return $("//textarea[@name='message']") }
    get submitButton() { return $("//a[@class='dt-btn dt-btn-m dt-btn-submit']") }
    get feedbackText() { return $("//div[@class='formErrorContent']") }
    get mergedDrag() {return $("#dragb>#draga")}
    //get draga() {return $("#draga")}
    //get dragb() {return $("#dragb")}
    get alertBox(){return $("//button[@id='alert']")}
    get newWindow(){return $("//button[@onclick='newBrwWin()']")}
    get newMessageWindow(){return $("//button[@onclick='newMsgWin()']")}
    get newTab(){return $("//button[@onclick='newBrwTab()']")}
    get getMessage(){return $("//body[text()='This message window is only for viewing purposes']")}
    get pageHeader(){return $("//h2[@class='wpb_heading']")}


    async homePageLink() { await browser.url("http://www.seleniumframework.com/Practiceform/"); }

}
export default new SignInPage()