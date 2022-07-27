package TestRunner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

//import org.junit.runner.RunWith;
//
//import io.cucumber.junit.Cucumber;
//import io.cucumber.junit.CucumberOptions;
//
//@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\feature1",
				  glue = { "stepdefiniton" },
				  plugin = {"pretty", "html:target/htmlreports"} )
public class TestRunner2 extends AbstractTestNGCucumberTests{

}
