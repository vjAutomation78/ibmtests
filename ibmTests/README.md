# ibmtests
IBM test automation
Caveats:
- The Automation framework was built on a MAC using IntelliJ IDE
- This should work on Eclipse IDE or any other IDE as well
- The tests can be executed from a command line as well using Maven build tool
- The Selenium framework has been built using Page Object Model and PageFactory - design patterns
- The driver used for execution is "ChromeDriver" and the driver is included in the project

Prerequisites:
- IDE needs to be installed on a machine where the tests needs to be executed
- Maven should be installed
- Java-1.8 JDK must be available/installed
- And any other relevant tools must be available

Downloading and setting up the framework
- Extract the files from the ZIP folder on to a local drive
- Import the project in to an IDE (e.g. IntellJ, Eclipse and so on)
- Once the project is imported, perform a maven update to download all the dependencies

Executing the tests (on IDE):
- Navigate to src/resources/features folder
- Right click on "Perform_WikiPedia_Search.feature" file and select "Run 'Feature:Perform_WikiPedia_Search'
- This will execute all the tests written for the assessment purpose
- The browser setup and teardown has been handled properly, meaning browser doesn't need to be closed after the execution

Executing the tests (on Command line):
- Navigate to the project folder
- type "maven clean install"
- This will execute all the tests written for the assessment purpose
- The browser setup and teardown has been handled properly, meaning browser doesn't need to be closed after the execution

Reports:
- When the tests are run using the IDE, the results will be visible on the console and also can be viewed in the execution pane on an IDE
- When the tests are run on the command line using Maven, the results will be stored under:
    - target/cucumber-reports
- Open the index.html using a browser to view the results clearly

