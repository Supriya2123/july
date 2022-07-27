package Search;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import Browser.Browser;

public class Google extends Browser{
	public static void searchOnGoogle(String term) {
		WebElement search = driver.findElement(By.name("q"));
		search.sendKeys(term);
	}
	public static void pressEnter() throws InterruptedException {
		WebElement search = driver.findElement(By.name("q"));
		search.sendKeys(Keys.ENTER);
		Thread.sleep(1000);
	}
	
}
