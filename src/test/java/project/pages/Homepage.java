package project.pages;

import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import project.utils.Driver;

public class Homepage {
    public Homepage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(id = "onetrust-accept-btn-handler")
    public WebElement cookiesAcceptButton;

    @FindBy(css = ".bwi-account-o.-customer")
    public WebElement accountSection;

    @FindBy(css = ".bwi-favorite-o.-favorite")
    public WebElement favoritesSection;

    @FindBy(css = ".bwi-cart-o.-cart")
    public WebElement basketSection;

    @FindBy(css = ".o-header__search--input")
    public WebElement searchBar;

    @FindBy(css = ".swiper-container-pointer-events")
    public WebElement homepageSlider;

    public void acceptCookies() {
        cookiesAcceptButton.click();
    }

    public void verifyAccountSection() {
        Assert.assertTrue(accountSection.isDisplayed());
    }

    public void verifyFavoritesSection() {
        Assert.assertTrue(favoritesSection.isDisplayed());
    }

    public void verifyBasketSection() {
        Assert.assertTrue(basketSection.isDisplayed());
    }

    public void searchFor(String searchKey) {
        searchBar.sendKeys(searchKey, Keys.ENTER);
    }

    public void verifyHomepage() {
        Assert.assertTrue(homepageSlider.isDisplayed());
    }

}
