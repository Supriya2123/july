$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature1/googlesearch.feature");
formatter.feature({
  "name": "Searching on Google",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User wants to search a term on Google search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters the url \"https://www.google.com/\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters the term \u0027\u003csearchdata\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "user presses enter key",
  "keyword": "And "
});
formatter.step({
  "name": "verify whether the search results are displayed",
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
formatter.scenario({
  "name": "User wants to search a term on Google search",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefiniton.sample.user_opens_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the url \"https://www.google.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefiniton.sample.user_enters_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the term \u0027Selenium\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefiniton.googlesearch.user_enters_the_term(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user presses enter key",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefiniton.googlesearch.user_presses_enter_key()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify whether the search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefiniton.googlesearch.verify_whether_the_search_results_are_displayed()"
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
  "name": "user opens the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefiniton.sample.user_opens_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the url \"https://www.google.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefiniton.sample.user_enters_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the term \u0027Java\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefiniton.googlesearch.user_enters_the_term(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user presses enter key",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefiniton.googlesearch.user_presses_enter_key()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify whether the search results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefiniton.googlesearch.verify_whether_the_search_results_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/feature1/sample.feature");
formatter.feature({
  "name": "verification of the url",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user wants to check the functionality of the url",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefiniton.sample.user_opens_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the url \"https://www.google.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefiniton.sample.user_enters_the_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user wants to verify whether the page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefiniton.sample.user_wants_to_verify_whether_the_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
});