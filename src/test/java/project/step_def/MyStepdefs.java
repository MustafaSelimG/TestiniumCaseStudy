package project.step_def;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import project.pages.BasketPage;
import project.pages.Homepage;
import project.pages.ProductPage;
import project.pages.SearchResultPage;
import project.utils.Helper;

import java.util.logging.Logger;

public class MyStepdefs {

    Homepage homepage = new Homepage();
    SearchResultPage searchResultPage = new SearchResultPage();
    ProductPage productPage = new ProductPage();
    BasketPage basketPage = new BasketPage();

    static Logger log = Logger.getLogger(MyStepdefs.class.getName());


    @Given("cookies accepted")
    public void cookiesAccepted() {
        homepage.acceptCookies();
        log.info("Cookies accepted");
    }

    @And("verify the homepage is open")
    public void verifyTheHomepageIsOpen() {
        homepage.verifyHomepage();
        log.info("Homepage is verified with slider");
    }

    @Then("verify the account section")
    public void verifyTheAccountSection() {
        homepage.verifyAccountSection();
        log.info("Account section is verified");
    }

    @And("verify the favorites section")
    public void verifyTheFavoritesSection() {
        homepage.verifyFavoritesSection();
        log.info("Favorites section is verified");
    }

    @And("verify the basket section")
    public void verifyTheBasketSection() {
        homepage.verifyBasketSection();
        log.info("Basket section is verified");
    }

    @When("search for {string}")
    public void searchFor(String searchKey) {
        homepage.searchFor(searchKey);
        log.info("Search has been made for " + searchKey);
    }

    @Then("result page should be seen")
    public void resultPageShouldBeSeen() {
        searchResultPage.verifySearchResultPage();
        log.info("Result page is verified");
    }

    @And("scroll to the end of the page")
    public void scrollToTheEndOfThePage() {
        Helper.scrollToEnd();
        log.info("Scroll has been made");
    }

    @And("click the show more button")
    public void clickTheShowMoreButton() {
        searchResultPage.clickShowMoreButton();
        log.info("Show more button is clicked");
    }

    @And("select the product randomly")
    public void selectTheProductRandomly() {
        searchResultPage.selectRandomProduct();
        log.info("Random product was selected");
    }

    @And("add product the basket")
    public void addProductTheBasket() {
        productPage.addProductToBasket();
        log.info("Product added to the basket");
    }

    @And("verify the product price")
    public void verifyTheProductPrice() {
        productPage.verifyProductPrice();
        log.info("Product price is verified");
    }

    @And("increase the number of products")
    public void increaseTheNumberOfProducts() {
        basketPage.increaseQuantity(2);
        log.info("Quantity action has been made");
    }

    @When("delete products from basket")
    public void deleteProductsFromBasket() {
        basketPage.deleteProduct();
        log.info("Product deleted");
    }

    @Then("basket should be empty")
    public void basketShouldBeEmpty() {
        basketPage.verifyBasketEmpty();
        log.info("Basket confirmed to be empty");
    }

}
