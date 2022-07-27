package multiple;

import org.testng.Assert;

import Browser.Browser;
import Search.Google;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class feature3 {
	@Given("user opens browser")
	public void user_opens_browser() {
		Browser.openBrowser();
	}

	@When("user enters url {string}")
	public void user_enters_url(String string) {
		Browser.goToUrl(string);
	}

	@Then("user wants to verify whether page is displayed")
	public void user_wants_to_verify_whether_page_is_displayed() {
		String actualTitle = Browser.getTitle();
	    org.junit.Assert.assertEquals("Google", actualTitle);
	    Browser.closeBrowser();
	}

	@And("user enters term {string}")
	public void user_enters_term(String string) {
		Google.searchOnGoogle(string);
	}

	@And("user presses the enter key")
	public void user_presses_the_enter_key() throws InterruptedException {
	    Google.pressEnter();
	}

	@Then("verify whether search results are displayed")
	public void verify_whether_search_results_are_displayed() {
		String actualTitle = Browser.getTitle();
	    boolean result = actualTitle.matches("[A-Za-z]*[ ][-][ ]Google Search");
	    Assert.assertTrue(result);
	    Browser.closeBrowser();
	}
}
