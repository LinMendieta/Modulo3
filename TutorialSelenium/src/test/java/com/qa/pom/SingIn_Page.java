package com.qa.pom;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.WebDriver;

import java.util.List;

public class SingIn_Page extends Base {

    By usernameLocator = By.name("userName");
    By passwordLocator = By.name("password");
    By loginButtonLocator = By.name("login");
    By fontLocator = By.tagName("font");


    public SingIn_Page(WebDriver driver) {

        super(driver);
    }

    public void loginUser() throws InterruptedException {

        type("test0002",usernameLocator);
        type("123456",passwordLocator);
        click(loginButtonLocator);

    }

    public String registerMessage(){
        List<WebElement> fonts = findElements(fontLocator);
        return getText(fonts.get(7));
    }
}
