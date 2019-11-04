$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Perform_WikiPedia_Search.feature");
formatter.feature({
  "line": 1,
  "name": "To perform Wikipedia search for a given string and verifying results",
  "description": "",
  "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3862437922,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the wikipedia homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WikiPediaSearchTests.user_is_on_the_wikipedia_homepage()"
});
formatter.result({
  "duration": 1062326820,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verifying that English is the default language on Wikipedia search page",
  "description": "",
  "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;verifying-that-english-is-the-default-language-on-wikipedia-search-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user checks the default language for the search field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify \"English\" is displayed as the default search language",
  "keyword": "Then "
});
formatter.match({
  "location": "WikiPediaSearchTests.user_checks_the_default_language_for_the_search_field()"
});
formatter.result({
  "duration": 294459853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 8
    }
  ],
  "location": "WikiPediaSearchTests.verify_English_is_displayed_as_the_default_search_language(String)"
});
formatter.result({
  "duration": 3060592,
  "status": "passed"
});
formatter.after({
  "duration": 76304271,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Searching on Wikipedia for a search string and verifying the results",
  "description": "",
  "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;searching-on-wikipedia-for-a-search-string-and-verifying-the-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user searches for a string using \"\u003csearchString\u003e\" string",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user verifies that the search results page matches the \"\u003csearchString\u003e\" string",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verifies that the search results page is available in other languages",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;searching-on-wikipedia-for-a-search-string-and-verifying-the-results;",
  "rows": [
    {
      "cells": [
        "searchString"
      ],
      "line": 15,
      "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;searching-on-wikipedia-for-a-search-string-and-verifying-the-results;;1"
    },
    {
      "cells": [
        "test plan"
      ],
      "line": 16,
      "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;searching-on-wikipedia-for-a-search-string-and-verifying-the-results;;2"
    },
    {
      "cells": [
        "Capybara"
      ],
      "line": 17,
      "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;searching-on-wikipedia-for-a-search-string-and-verifying-the-results;;3"
    },
    {
      "cells": [
        "seleNIUM"
      ],
      "line": 18,
      "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;searching-on-wikipedia-for-a-search-string-and-verifying-the-results;;4"
    },
    {
      "cells": [
        "champions LEAGUE"
      ],
      "line": 19,
      "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;searching-on-wikipedia-for-a-search-string-and-verifying-the-results;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1430279938,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the wikipedia homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WikiPediaSearchTests.user_is_on_the_wikipedia_homepage()"
});
formatter.result({
  "duration": 613131530,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Searching on Wikipedia for a search string and verifying the results",
  "description": "",
  "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;searching-on-wikipedia-for-a-search-string-and-verifying-the-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user searches for a string using \"test plan\" string",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user verifies that the search results page matches the \"test plan\" string",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verifies that the search results page is available in other languages",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test plan",
      "offset": 34
    }
  ],
  "location": "WikiPediaSearchTests.user_searches_for_a_string_using_searchString(String)"
});
formatter.result({
  "duration": 656744349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test plan",
      "offset": 56
    }
  ],
  "location": "WikiPediaSearchTests.user_verifies_that_the_search_results_page_matches_the_searchString(String)"
});
formatter.result({
  "duration": 112567648,
  "status": "passed"
});
formatter.match({
  "location": "WikiPediaSearchTests.verify_that_the_search_results_page_is_available_in_other_languages()"
});
formatter.result({
  "duration": 23310796,
  "status": "passed"
});
formatter.after({
  "duration": 78540225,
  "status": "passed"
});
formatter.before({
  "duration": 1489958202,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the wikipedia homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WikiPediaSearchTests.user_is_on_the_wikipedia_homepage()"
});
formatter.result({
  "duration": 682920219,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Searching on Wikipedia for a search string and verifying the results",
  "description": "",
  "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;searching-on-wikipedia-for-a-search-string-and-verifying-the-results;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user searches for a string using \"Capybara\" string",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user verifies that the search results page matches the \"Capybara\" string",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verifies that the search results page is available in other languages",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Capybara",
      "offset": 34
    }
  ],
  "location": "WikiPediaSearchTests.user_searches_for_a_string_using_searchString(String)"
});
formatter.result({
  "duration": 931876108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Capybara",
      "offset": 56
    }
  ],
  "location": "WikiPediaSearchTests.user_verifies_that_the_search_results_page_matches_the_searchString(String)"
});
formatter.result({
  "duration": 155494415,
  "status": "passed"
});
formatter.match({
  "location": "WikiPediaSearchTests.verify_that_the_search_results_page_is_available_in_other_languages()"
});
formatter.result({
  "duration": 76895328,
  "status": "passed"
});
formatter.after({
  "duration": 97794894,
  "status": "passed"
});
formatter.before({
  "duration": 1871488250,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the wikipedia homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WikiPediaSearchTests.user_is_on_the_wikipedia_homepage()"
});
formatter.result({
  "duration": 660681663,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Searching on Wikipedia for a search string and verifying the results",
  "description": "",
  "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;searching-on-wikipedia-for-a-search-string-and-verifying-the-results;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user searches for a string using \"seleNIUM\" string",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user verifies that the search results page matches the \"seleNIUM\" string",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verifies that the search results page is available in other languages",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "seleNIUM",
      "offset": 34
    }
  ],
  "location": "WikiPediaSearchTests.user_searches_for_a_string_using_searchString(String)"
});
formatter.result({
  "duration": 933352524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seleNIUM",
      "offset": 56
    }
  ],
  "location": "WikiPediaSearchTests.user_verifies_that_the_search_results_page_matches_the_searchString(String)"
});
formatter.result({
  "duration": 296272520,
  "status": "passed"
});
formatter.match({
  "location": "WikiPediaSearchTests.verify_that_the_search_results_page_is_available_in_other_languages()"
});
formatter.result({
  "duration": 101597556,
  "status": "passed"
});
formatter.after({
  "duration": 94136953,
  "status": "passed"
});
formatter.before({
  "duration": 1572192722,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the wikipedia homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WikiPediaSearchTests.user_is_on_the_wikipedia_homepage()"
});
formatter.result({
  "duration": 1646346160,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Searching on Wikipedia for a search string and verifying the results",
  "description": "",
  "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;searching-on-wikipedia-for-a-search-string-and-verifying-the-results;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user searches for a string using \"champions LEAGUE\" string",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user verifies that the search results page matches the \"champions LEAGUE\" string",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verifies that the search results page is available in other languages",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "champions LEAGUE",
      "offset": 34
    }
  ],
  "location": "WikiPediaSearchTests.user_searches_for_a_string_using_searchString(String)"
});
formatter.result({
  "duration": 1379218846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "champions LEAGUE",
      "offset": 56
    }
  ],
  "location": "WikiPediaSearchTests.user_verifies_that_the_search_results_page_matches_the_searchString(String)"
});
formatter.result({
  "duration": 74820910,
  "status": "passed"
});
formatter.match({
  "location": "WikiPediaSearchTests.verify_that_the_search_results_page_is_available_in_other_languages()"
});
formatter.result({
  "duration": 28895139,
  "status": "passed"
});
formatter.after({
  "duration": 92617549,
  "status": "passed"
});
formatter.before({
  "duration": 1680810751,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the wikipedia homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WikiPediaSearchTests.user_is_on_the_wikipedia_homepage()"
});
formatter.result({
  "duration": 640718451,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Navigating to search results page in a different language",
  "description": "",
  "id": "to-perform-wikipedia-search-for-a-given-string-and-verifying-results;navigating-to-search-results-page-in-a-different-language",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user sets the language to German \"Deutsch\" on the home page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user searches for a string using \"champions league\" string",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user verifies that the search results page matches the \"champions league\" string",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "verifies that search results has a link to version in English",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Deutsch",
      "offset": 34
    }
  ],
  "location": "WikiPediaSearchTests.user_sets_the_language_to_german_on_the_home_page(String)"
});
formatter.result({
  "duration": 130086841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "champions league",
      "offset": 34
    }
  ],
  "location": "WikiPediaSearchTests.user_searches_for_a_string_using_searchString(String)"
});
formatter.result({
  "duration": 784387260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "champions league",
      "offset": 56
    }
  ],
  "location": "WikiPediaSearchTests.user_verifies_that_the_search_results_page_matches_the_searchString(String)"
});
formatter.result({
  "duration": 137747548,
  "status": "passed"
});
formatter.match({
  "location": "WikiPediaSearchTests.verifies_that_search_results_has_a_link_to_version_in_English()"
});
formatter.result({
  "duration": 742640596,
  "status": "passed"
});
formatter.after({
  "duration": 80466590,
  "status": "passed"
});
});