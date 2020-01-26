describe('form angular form', function() {
    it('should display a validation message', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name("name")).sendKeys("A");
        element(by.css("input[name='email']")).click();

        element(by.css("div[class*='alert alert-danger']")).getText().then((text)=>{
            // console.log(text);
            expect(text).toEqual("Name should be at least 2 characters");
        });
    });
});