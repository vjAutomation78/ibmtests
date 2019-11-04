package stepDef;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import helperClasses.DriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Hooks extends DriverManager {

    //This is the setup process - Using @Before cucumber annotation
    @Before
    public void beforeScenario() {
        driver = new DriverManager().getDriver();
    }

    //This is for tear down process - Using @After cucumber annotation
    @After
    public void afterScenario() {
        new DriverManager().quitDriver();
    }


}
