Feature: To perform Wikipedia search for a given string and verifying results

  Background:
    Given user is on the wikipedia homepage

  Scenario: Verifying that English is the default language on Wikipedia search page
    When user checks the default language for the search field
    Then verify "English" is displayed as the default search language

  Scenario Outline: Searching on Wikipedia for a search string and verifying the results
    When user searches for a string using "<searchString>" string
    Then user verifies that the search results page matches the "<searchString>" string
    And verifies that the search results page is available in other languages
    Examples:
      |searchString     |
      |test plan        |
      |Capybara         |
      |seleNIUM         |
      |champions LEAGUE |

  Scenario: Navigating to search results page in a different language
    When user sets the language to German "Deutsch" on the home page
    And user searches for a string using "champions league" string
    Then user verifies that the search results page matches the "champions league" string
    And verifies that search results has a link to version in English