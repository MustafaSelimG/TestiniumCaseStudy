package project.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import project.utils.Driver;
import project.utils.Helper;

public class BasketPage {
    public BasketPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "quantitySelect0")
    public WebElement productQuantity;

    @FindBy(id = "removeCartItemBtn0")
    public WebElement deleteProduct;

    @FindBy(css = ".m-empty__messageBtn")
    public WebElement continueShoppingButton;

    public void increaseQuantity(int quantity) {
        productQuantity.click();
        try {
            Helper.findElementByCss("#quantitySelect0 option:nth-child(" + quantity + ")").click();
        } catch (Exception e) {
            Helper.findElementByCss("#quantitySelect0 option:nth-child(1)").click();
        }
        Helper.wait(3);
    }

    public void deleteProduct() {
        Helper.waitForElement(deleteProduct);
        deleteProduct.click();
    }

    public void verifyBasketEmpty() {
        Helper.waitForElement(continueShoppingButton);
        Assert.assertTrue(continueShoppingButton.isDisplayed());
    }
}
