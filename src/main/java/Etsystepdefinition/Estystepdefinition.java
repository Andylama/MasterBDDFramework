package Etsystepdefinition;

import EtsyHomepage.EtsyHomepage;
import common.WebAPI;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class Estystepdefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(  false,
                "browserstack",
                "windows", "11",
                "chrome",
                "111",
                "https://www.etsy.com/");

    }
    @After
    public void closeBrowser(){
        cleanUp();
    }
    static EtsyHomepage homepage;
    public static void getInitElements(){homepage= PageFactory.initElements(driver,EtsyHomepage.class);}
    @Given("I am in Esty Homepage.")
    public void i_am_in_Esty_Homepage() {
        getInitElements();
    }

    @When("I search product in search Bar")
    public void i_search_product_in_search_Bar() throws InterruptedException {
        getInitElements();
        homepage.searching_a_Product_in_EtsySearchBar();
    }

    @When("I click on the search icon")
    public void i_click_on_the_search_icon() throws InterruptedException {
        getInitElements();
        homepage.submitForSearchResult();
    }

    @Then("I go the product search page")
    public void i_go_the_product_search_page() {
        getInitElements();
        driver.getTitle();
    }
}
