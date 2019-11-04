package pageobjects;

import helperClasses.HelperMethods;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WikiPediaHomePage {

    WebDriver driver;

    public WikiPediaHomePage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    /*
        All the Web elements for Home page are stored here
     */

    @FindBy(id = "searchLanguage")
    public WebElement searchLangField;

    @FindBy(id = "searchInput")
    WebElement searchTextBox;

    @FindBy(xpath = "//*[@id=\"search-form\"]/fieldset/button")
    WebElement searchButton;

    /*
        All the reusable methods for the Homepage
     */

    public String defaultSearchLang(){
        String defaultLangDisplayed;

        defaultLangDisplayed = HelperMethods.readDropdownField_SelectedValue(searchLangField);

        return defaultLangDisplayed;
    }

    public void enterSearchString(String searchString){
        searchTextBox.sendKeys(searchString);
    }

    public void clickOnSearch(){
        searchButton.click();
    }

    public void selectDifferentLanguage(String newLanguage){
        //Select a different language
        HelperMethods.selectOptionFromDropdown(newLanguage, searchLangField);
    }
}