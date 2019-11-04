package helperClasses;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverManager {

    protected static WebDriver driver;

    //Creating a constructor and initialise the driver
    public DriverManager() {
        initialiseDriver();
    }

    public void initialiseDriver() {
        if (driver == null)
            createNewDriverInstance();
    }

    private void createNewDriverInstance() {
        System.setProperty("webdriver.chrome.driver", "src/resources/drivers/chromedriver");
        driver = new ChromeDriver();
    }

    public WebDriver getDriver() {
        return driver;
    }

    public void quitDriver() {
        driver.quit();
        driver = null;
    }

}
