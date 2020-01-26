describe('all capture operation demo', function() {

    function operation(firstNumber,secondNumber,option){
        element(by.model('first')).sendKeys(firstNumber);
        element(by.model('second')).sendKeys(secondNumber);

        element.all(by.tagName("option")).each((item)=>{
            item.getAttribute("value").then((value)=>{
                if(value === option){
                    item.click()
                }
            })
        });

        element(by.id('gobutton')).click();
    }

    it('this should test demo', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        operation(4,2,"MULTIPLICATION");
        operation(60,20,"ADDITION");
        operation(1000,200,"SUBTRACTION");
        element.all(by.repeater("result in memory")).each((item)=>{
            item.element(by.css("td:nth-child(3)")).getText().then((text)=>{
                console.log(`total: ${text}`);
            });
        });

        expect( element.all(by.repeater("result in memory")).get(0).element(by.css("td:nth-child(3)")).getText()).toEqual("800");
        expect( element.all(by.repeater("result in memory")).get(1).element(by.css("td:nth-child(3)")).getText()).toEqual("80");
        expect( element.all(by.repeater("result in memory")).get(2).element(by.css("td:nth-child(3)")).getText()).toEqual("8");
    });
});