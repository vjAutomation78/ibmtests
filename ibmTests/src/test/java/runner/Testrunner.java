package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/resources/features",
        glue = {"stepDef"},
        plugin = { "pretty", "html:target/cucumber-reports" },
        monochrome = true

)

public class Testrunner {

}