describe('all capture demo', function() {

    function add(a,b){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }

    xit('this should Count all elements', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        add(1,2);
        add(10,20);
        add(100,200);
        element.all(by.repeater("result in memory")).count().then(function(text){
            console.log(`count: ${text}`);
        });
        expect( element.all(by.repeater("result in memory")).count()).toEqual(3);
    });

    it('this should capture all elements', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        add(1,2);
        add(10,20);
        add(100,200);
        element.all(by.repeater("result in memory")).each((item)=>{
            item.element(by.css("td:nth-child(3)")).getText().then((text)=>{
                console.log(`total: ${text}`);
            });
        });

        expect( element.all(by.repeater("result in memory")).get(0).element(by.css("td:nth-child(3)")).getText()).toEqual("300");
        expect( element.all(by.repeater("result in memory")).get(1).element(by.css("td:nth-child(3)")).getText()).toEqual("30");
        expect( element.all(by.repeater("result in memory")).get(2).element(by.css("td:nth-child(3)")).getText()).toEqual("3");
    });
});