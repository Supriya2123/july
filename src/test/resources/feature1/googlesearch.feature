Feature: Searching on Google

  Scenario Outline: User wants to search a term on Google search
    Given user opens the browser
    When user enters the url "https://www.google.com/"
    And user enters the term '<searchdata>'
    And user presses enter key
    Then verify whether the search results are displayed
		Examples: 
		|searchdata|
		|Selenium|
		|Java|