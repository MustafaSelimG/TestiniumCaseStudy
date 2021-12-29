package project.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Helper {
    private static WebDriver driver = Driver.get();
    private static WebDriverWait wait = new WebDriverWait(driver, 10);

    public static void waitForElement(WebElement element) {
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public static void scrollToElement(WebElement element) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView(true);", element);
    }

    public static void scrollToEnd() {
        JavascriptExecutor js = (JavascriptExecutor) Driver.get();
        js.executeScript("window.scrollTo(0,6500)");
    }

    public static WebElement findElementByCss(String css) {
        return driver.findElement(By.cssSelector(css));
    }

}
