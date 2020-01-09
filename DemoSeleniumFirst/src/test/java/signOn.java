import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

import static junit.framework.TestCase.assertEquals;

public class signOn {
    private WebDriver driver;
    By singOnLocator = By.linkText("SIGN-ON");
    By singOnImagePageLocator = By.xpath("//img[@src='/images/masts/mast_signon.gif']");
    By usernameLocator = By.name("userName");
    By passwordLocator = By.name("password");

    By submitButtonLocator = By.name("login");
    By fontLocator = By.tagName("font");


    @Before
    public void setUp(){
        System.setProperty("webdriver.chrome.driver","./src/test/resources/chromedriver/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://newtours.demoaut.com/mercurywelcome.php");
    }

    @Test
    public  void positiveSingOn() throws InterruptedException {
        driver.findElement(singOnLocator).click();
        Thread.sleep(2000);

        if(driver.findElement(singOnImagePageLocator).isDisplayed()){
            driver.findElement(usernameLocator).sendKeys("test0001");
            driver.findElement(passwordLocator).sendKeys("123456");
            driver.findElement(submitButtonLocator).click();
        }
        else{
            System.out.print("Page not found");
        }

        List<WebElement> fonts = driver.findElements(fontLocator);
        assertEquals("Flight Details", fonts.get(7).getText());
    }

    @Test
    public  void negativeSingOn() throws InterruptedException {
        driver.findElement(singOnLocator).click();
        Thread.sleep(2000);

        if(driver.findElement(singOnImagePageLocator).isDisplayed()){
            driver.findElement(usernameLocator).sendKeys("testuser");
            driver.findElement(passwordLocator).sendKeys("234567");
            driver.findElement(submitButtonLocator).click();
        }
        else{
            System.out.print("Page not found");
        }

        List<WebElement> fonts = driver.findElements(fontLocator);
        assertEquals("Password:", fonts.get(5).getText());
    }

    @After
    public void tearDown(){
        driver.quit();
    }
}
