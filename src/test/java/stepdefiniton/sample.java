package stepdefiniton;

import Browser.Browser;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class sample {
	@Given("user opens the browser")
	public void user_opens_the_browser() {
	    Browser.openBrowser();
	}

	@When("user enters the url {string}")
	public void user_enters_the_url(String string) {
	    Browser.goToUrl(string);
	}

	@Then("user wants to verify whether the page is displayed")
	public void user_wants_to_verify_whether_the_page_is_displayed() {
	    String actualTitle = Browser.getTitle();
	    org.junit.Assert.assertEquals("Google", actualTitle);
	    Browser.closeBrowser();
	}
}
