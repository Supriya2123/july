package Browser;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

import demo.DemoLog;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Browser {
	public static WebDriver driver;
	static String str;
	
	public static ExtentHtmlReporter reporter = new ExtentHtmlReporter("./Report/extentreport.html");
	public static ExtentReports extent = new ExtentReports();
	
	public static void openBrowser() {
		DemoLog.log4j(1);
		extent.attachReporter(reporter);
		ExtentTest logger = extent.createTest("Open Browser Test");
		try {
			DemoLog.log4j(3);
			logger.log(Status.INFO, "Opening the Browser");
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		logger.log(Status.PASS, "Open Browser Passed");
		} catch (Exception e) {
			logger.log(Status.FAIL, "Opening Browser Failed");
			DemoLog.log4j(4);
			System.out.println(e);
		}
		extent.flush();
	}
	
	public static void goToUrl(String url) {
		DemoLog.log4j(1);
		extent.attachReporter(reporter);
		ExtentTest logger = extent.createTest("Open url Test");
		try {
			
			DemoLog.log4j(3);
			logger.log(Status.INFO, "Opening the url");
		driver.get(url);
		logger.log(Status.PASS, "Open url Passed");
		} catch (Exception e) {
			logger.log(Status.FAIL, "Opening url Failed");
			DemoLog.log4j(5);
			System.out.println(e);
		}
		extent.flush();
	}
	
	public static void closeBrowser() {
		DemoLog.log4j(3);
		extent.attachReporter(reporter);
		ExtentTest logger = extent.createTest("closing Browser Test");
		try {
			DemoLog.log4j(1);
			logger.log(Status.INFO, "closing the Browser");
		driver.quit();
		logger.log(Status.PASS, "closing Browser Passed");
		} catch (Exception e) {
			logger.log(Status.FAIL, "closing url Failed");
			DemoLog.log4j(5);
			System.out.println(e);
		}
		extent.flush();
	}
	
	
	public static String getTitle() {
		DemoLog.log4j(1);
		extent.attachReporter(reporter);
		ExtentTest logger = extent.createTest("getting title Test");
		try {
			DemoLog.log4j(2);
			logger.log(Status.INFO, "getting the title");
		 str = driver.getTitle();
		} catch (Exception e) {
			logger.log(Status.FAIL, "getting title Failed");
			DemoLog.log4j(4);
			System.out.println(e);
		}
		return str;
		
	}
	
}
