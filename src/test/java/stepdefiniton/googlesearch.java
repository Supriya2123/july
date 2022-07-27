package stepdefiniton;

import org.testng.Assert;

import Browser.Browser;
import Search.Google;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

public class googlesearch {
	@And("user enters the term {string}")
	public void user_enters_the_term(String string) {
	    Google.searchOnGoogle(string);
	}

	@And("user presses enter key")
	public void user_presses_enter_key() throws InterruptedException {
	    Google.pressEnter();
	}

	@Then("verify whether the search results are displayed")
	public void verify_whether_the_search_results_are_displayed() {
	    String actualTitle = Browser.getTitle();
	    boolean result = actualTitle.matches("[A-Za-z]*[ ][-][ ]Google Search");
	    Assert.assertTrue(result);
	    Browser.closeBrowser();
	}
	
}
