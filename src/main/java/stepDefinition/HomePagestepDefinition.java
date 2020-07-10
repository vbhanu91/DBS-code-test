package stepDefinition;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.GeckoDriverInfo;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class HomePagestepDefinition {

	 WebDriver driver;
	
@Given("^launch make my trip application and user is on Home page$")
public void launch_make_my_trip_application_and_user_is_on_Home_page() throws InterruptedException {
	System.setProperty("webdriver.chrome.driver","C:\\Automation Practise\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.manage().window().maximize();
	driver.navigate().to("https://www.goibibo.com/flights/");
	Thread.sleep(4000);
}

@When("^user enters \"(.*)\" and \"(.*)\" city$")
public void user_enters_sorce_and_destination_city(String source,String desti) throws InterruptedException{

	new WebDriverWait(driver, 20).until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='gosuggest_inputSrc']"))).sendKeys(source);
	List<WebElement> fromCity = new WebDriverWait(driver, 20).until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//*[@id=\"react-autosuggest-1\"]")));
	for (WebElement element : fromCity) {
	if (element.getText().contains("San Francisco"));
	element.click();
}

	new WebDriverWait(driver, 20).until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='gosuggest_inputDest']"))).sendKeys(desti);
	List<WebElement> ToCity = new WebDriverWait(driver, 20).until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//*[@id=\"react-autosuggest-1\"]")));
	for (WebElement element : ToCity) {
	if (element.getText().contains("Denver"));
	element.click();
}
	driver.findElement(By.xpath("//input[@id='departureCalendar']")).click();
	//It selects the next month date 
	driver.findElement(By.xpath("//span[@class='DayPicker-NavButton DayPicker-NavButton--next']")).click();
	driver.findElement(By.xpath("//div[@class='DayPicker-Week'][4]//div[4]")).click();
	//driver.findElement(By.xpath("//div[@class='DayPicker-Month']")).sendKeys(HomePagestepDefinition.getFutureDateForXDays(xDays));
	Thread.sleep(2000);
}

@Then("^user searched for available flight$")
public void user_searched_for_available_flight() {
	driver.findElement(By.xpath("//button[@id='gi_search_btn']")).click();
}

@Then("^user selects the chepest flight from itinery$")
public void user_selects_the_chepest_flight_from_itinery() {
	driver.findElement(By.xpath("(//span[@class='db clearfix']//input[@value='BOOK'])[1]")).click();
}


/*
 * //For time being I am creating future date here in Stepdefinition file public
 * static String getFutureDateForXDays(int xDays) { DateFormat sdf = new
 * SimpleDateFormat("yyyy-MM-d"); Calendar calenDer = Calendar.getInstance();
 * calenDer.add(Calendar.DATE, xDays); Date date = calenDer.getTime();
 * System.out.println("X days later: " + date); String strDate =
 * sdf.format(date); System.out.println("formatted date in mm/dd/yy : " +
 * strDate); return strDate; }
 */
 


}
