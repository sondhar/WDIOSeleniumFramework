Feature: Fill Contact Us Form & Validate the Response

    Scenario: Enter the contact details and check if successfully submitted

        Given We are in the PractiseForm Page of SeleniumFramework Website
        When I enter the details in the given form
        Then I should see text displayed as "Feedback has been sent to the administrator"

    Scenario: Check if the elements of the page are working fine

        When I drag element A to element B
        Then I should find the merged element
        When I click on alert box
        Then I should see alert text
        When I click on New Window Button
        Then I should be navigated to "http://www.seleniumframework.com/"
        When I click on New Message Window Button
        Then I should see message as "This message window is only for viewing purposes"
        When I click on New Browser Tab
        Then I should be navigated to a page having title as "http://www.seleniumframework.com/"




