package helperClasses;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class HelperMethods {

    /*
     * Select an option from drop down
     */

    public static void selectOptionFromDropdown(String VisibleText, WebElement element) {
        Select select = new Select(element);
        select.selectByVisibleText(VisibleText);
    }


    /*
     * To read the selected option in a dropdown using getFirstSelectedOption
     */
    public static String readDropdownField_SelectedValue(WebElement element) {
        Select select = new Select(element);
        WebElement selectedOption = select.getFirstSelectedOption();
        return selectedOption.getText().trim();
    }


}
