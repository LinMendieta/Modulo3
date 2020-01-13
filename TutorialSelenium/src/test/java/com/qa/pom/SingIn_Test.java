package com.qa.pom;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;

import static junit.framework.TestCase.assertEquals;

public class SingIn_Test {

    private WebDriver driver;
    private String url;
    SingIn_Page singInPage;

    @Before
    public void setUp(){
        url = "http://newtours.demoaut.com/mercurywelcome.php";
        singInPage = new SingIn_Page(driver);
        driver = singInPage.chromeDriverConnection();
        singInPage.visit(url);
    }

    @After
    public void tearDown(){
        driver.quit();
    }

    @Test
    public void testLoginrPOM() throws InterruptedException {
        singInPage.loginUser();
        assertEquals("Flight Details",singInPage.registerMessage());
    }
}
