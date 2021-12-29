package project.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import project.utils.Driver;
import project.utils.Helper;

import java.util.Random;

public class SearchResultPage {
    public SearchResultPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    Random random = new Random();

    @FindBy(id = "moreContentButton")
    public WebElement showMoreButton;

    @FindBy(id = "productFilterOpenButton")
    public WebElement filterButton;

    public void verifySearchResultPage() {
        Helper.waitForElement(filterButton);
        Assert.assertTrue(filterButton.isDisplayed());
    }

    public void clickShowMoreButton() {
        showMoreButton.click();
    }

    public void selectRandomProduct() {
        int productOrder = random.nextInt(60) + 2;
        Helper.scrollToElement(Helper.findElementByCss("#productList .o-productList__itemWrapper:nth-child(" + productOrder + ")"));
        Helper.findElementByCss("#productList .o-productList__itemWrapper:nth-child(" + productOrder + ")").click();
    }


}
