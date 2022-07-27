Feature: Multiple Test Cases

  Background: 
    Given user opens browser
    When user enters url "https://www.google.com/"

  Scenario: user wants to check the functionality of the url
    Then user wants to verify whether page is displayed

  Scenario Outline: User wants to search a term on Google search
    And user enters term '<searchdata>'
    And user presses the enter key
    Then verify whether search results are displayed

    Examples: 
      | searchdata |
      | Selenium   |
      | Java       |
