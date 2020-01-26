describe('alert Demo', function() {
    it('should works whit non angular page', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');
        element(by.id("alertbtn")).click();

        browser.switchTo().alert().accept().then(function(){
            browser.sleep(5000);
        });

    });
});