describe('Cout items ecomers', function() {
    it('should count all items', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/shop');
        element(by.xpath("(//button[contains(text(),'Add')])[1]")).click();
        element(by.xpath("(//button[contains(text(),'Add')])[2]")).click();
        // element(by.xpath("(//button[contains(text(),'Add')])[3]")).click();
        element(by.css("a[class*='nav-link btn btn-primary']")).click();
        element.all(by.css("button[class*='btn btn-danger']")).count().then(function(text){
            // console.log(`count: ${text}`);
            expect(element.all(by.css("button[class*='btn btn-danger']")).count()).toEqual(2);
        });
    });
});