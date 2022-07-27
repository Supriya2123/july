$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature2/feature3.feature");
formatter.feature({
  "name": "Multiple Test Cases",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "multiple.feature3.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters url \"https://www.google.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "multiple.feature3.user_enters_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user wants to check the functionality of the url",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user wants to verify whether page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "multiple.feature3.user_wants_to_verify_whether_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User wants to search a term on Google search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters term \u0027\u003csearchdata\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "user presses the enter key",
  "keyword": "And "
});
formatter.step({
  "name": "verify whether search results are displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "searchdata"
      ]
    },
    {
      "cells": [
        "Selenium"
      ]
    },
    {
      "cells": [
        "Java"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "multiple.feature3.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters url \"https://www.google.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "multiple.feature3.user_enters_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to search a term on Google search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters term \u0027Selenium\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "multiple.feature3.user_enters_term(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user presses the enter key",
  "keyword": "And "
});
formatter.match({
  "location": "multiple.feature3.user_presses_the_enter_key()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify whether search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "multiple.feature3.verify_whether_search_results_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "multiple.feature3.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters url \"https://www.google.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "multiple.feature3.user_enters_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to search a term on Google search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters term \u0027Java\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "multiple.feature3.user_enters_term(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user presses the enter key",
  "keyword": "And "
});
formatter.match({
  "location": "multiple.feature3.user_presses_the_enter_key()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify whether search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "multiple.feature3.verify_whether_search_results_are_displayed()"
});
formatter.result({
  "status": "passed"
});
});