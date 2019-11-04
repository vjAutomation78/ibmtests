package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SearchResultsPage {

    WebDriver driver;

    public SearchResultsPage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    /*
        All the Web elements for Search results page are stored here
     */

    @FindBy(id = "firstHeading")
    WebElement firstHeadingResultsPage;

    @FindBy(xpath = "//*[@id=\"p-lang\"]/div/ul/li/a")
//    @FindBy(xpath = "//*[starts-with(@class, 'interlanguage-link interwiki')]")
    public List<WebElement> languagesList;


    /*
        All the reusable methods for the Search results
     */
    public String getFirstHeading(){
        String firstHeading = firstHeadingResultsPage.getText();
        return firstHeading;
    }

    // This is to check that if other languages are listed on search results page
    public boolean checkOtherLanguagesListed(){
        if(languagesList.size() >=1){
            System.out.println("languagesList.size() " + languagesList.size());
            return true;
        }else {
            return false;
        }
    }




}