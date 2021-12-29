package project.pages;

import project.utils.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import project.utils.Helper;

public class ProductPage {
    public ProductPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "addBasket")
    public WebElement addBasketButton;

    //Products in stock
    @FindBy(xpath = "//span[@class='m-variation__item']")
    public WebElement productVariation;

    //Products that are close to out of stock
    @FindBy(xpath = "//span[@class='m-variation__item -criticalStock']")
    public WebElement criticalProductVariation;

    @FindBy(id = "priceNew")
    public WebElement productPrice;

    @FindBy(css = ".o-header__userInfo--item.bwi-cart-o.-cart")
    public WebElement basketButton;

    @FindBy(css = ".m-productPrice__salePrice")
    public WebElement basketPrice;

    public void addProductToBasket() {
        try {
            productVariation.click();
        } catch (Exception e) {
            criticalProductVariation.click();
        }
        addBasketButton.click();
    }

    public void verifyProductPrice() {
        String price = productPrice.getText();
        basketButton.click();
        Helper.waitForElement(basketPrice);
        Assert.assertEquals(price, basketPrice.getText());
    }

}
