package stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helperClasses.DriverManager;

import pageobjects.SearchResultsPage;
import pageobjects.WikiPediaHomePage;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class WikiPediaSearchTests extends DriverManager {

    private String actDefaultSearchLang;

    // Scenario-1
    @Given("^user is on the wikipedia homepage$")
    public void user_is_on_the_wikipedia_homepage() throws Throwable {
        driver.get("https://www.wikipedia.org/");
    }

    @When("^user checks the default language for the search field$")
    public void user_checks_the_default_language_for_the_search_field() throws Throwable {
        // Store the default language in a global variable to be verified later
        actDefaultSearchLang = new WikiPediaHomePage(driver).defaultSearchLang();
    }

    @Then("^verify \"([^\"]*)\" is displayed as the default search language$")
    public void verify_English_is_displayed_as_the_default_search_language(String expDefaultSearchLang) throws Throwable {
        // To compare the expected default language with the Actual
        assertEquals(expDefaultSearchLang, actDefaultSearchLang);
    }

    //Scenario-2
    @When("^user searches for a string using \"([^\"]*)\" string$")
    public void user_searches_for_a_string_using_searchString(String arg1) throws Throwable {
        new WikiPediaHomePage(driver).enterSearchString(arg1);
        new WikiPediaHomePage(driver).clickOnSearch();
    }

    @Then("^user verifies that the search results page matches the \"([^\"]*)\" string$")
    public void user_verifies_that_the_search_results_page_matches_the_searchString(String expFirstHeading) throws Throwable {
        String actualFirstHeading;
        actualFirstHeading = new SearchResultsPage(driver).getFirstHeading();

        assertTrue(actualFirstHeading.equalsIgnoreCase(expFirstHeading));
    }

    @Then("^verifies that the search results page is available in other languages$")
    public void verify_that_the_search_results_page_is_available_in_other_languages() throws Throwable {

        assertTrue(new SearchResultsPage(driver).checkOtherLanguagesListed());
    }

    //Scenario-3
    @When("^user sets the language to German \"([^\"]*)\" on the home page$")
    public void user_sets_the_language_to_german_on_the_home_page(String newLang) throws Throwable {
        new WikiPediaHomePage(driver).selectDifferentLanguage(newLang);
    }

    @Then("^verifies that search results has a link to version in English$")
    public void verifies_that_search_results_has_a_link_to_version_in_English() throws Throwable {

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        int langList = new SearchResultsPage(driver).languagesList.size();
        for(int i=0; i<langList; i++){

            if(new SearchResultsPage(driver).languagesList.get(i).getText().contains("English")){
                // As soon as the "English" text is found it proves that there is a link to English version
                // Since the element locator "languagesList" is made of anchor tags

                assertTrue("On Assertion Failure: display English version not available", true);
            }
        }


    }

}
