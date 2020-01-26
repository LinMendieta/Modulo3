describe('this is a suit for  calculator', function() {
    it('this app will add two numbers', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(5);
        element(by.model('second')).sendKeys(3);

        element(by.id('gobutton')).click();

        console.log('---------------------');
        element(by.css("h2[class='ng-binding']")).getText().then((text)=>{
            console.log(text);
        });

        expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual("8");

    });
    it('this app will add two numbers 2', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(5);
        element(by.model('second')).sendKeys(3);

        element(by.id('gobutton')).click();

        console.log('---------------------');
        element(by.css("h2[class='ng-binding']")).getText().then((text)=>{
            console.log(text);
        });

        expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual("9");

    });
});