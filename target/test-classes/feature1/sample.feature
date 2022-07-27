Feature: verification of the url

  Scenario: user wants to check the functionality of the url
    Given user opens the browser
    When user enters the url "https://www.google.com/"
    Then user wants to verify whether the page is displayed
