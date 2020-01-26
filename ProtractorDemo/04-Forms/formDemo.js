describe('form angular demo', function() {
    it('should works whit non angular page', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/');


        element(by.name("name")).sendKeys("Agustin");
        element(by.css("input[name='email']")).sendKeys("linethmn@mail.com");
        element(by.id("exampleInputPassword1")).sendKeys("Password1.");
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.name("bday")).sendKeys("11112000");
        element(by.buttonText("Submit")).click().then((text)=>{
            element(by.css("div[class*='success']")).getText().then((text)=>{
                // console.log(text);
                expect(text).toContain("Success");
            });
        });
    });
});