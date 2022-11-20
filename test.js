const { sum } = require('./app.js');

test ('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);

});

const { fromEuroToDollar } = require('./app.js');
const { fromYenToPound } = require ('./app.js');
const { fromDollarToYen } = require ('./app.js');

test("10000 yen should be 62.55 pounds", function(){
    const pounds = fromYenToPound(10000);
    const expected = ((10000 / 127.9) * 0.8);
     expect(pounds).toBe(parseFloat(expected.toFixed(2))); 
});

test("3.5 Euros should be 4.22 dollars", function(){
    const dollar = fromEuroToDollar(3.5);
    const expected = (3.5 * 1.206);
     expect(dollar).toBe(parseFloat(expected.toFixed(2))); 
});

test("100 dollars should be 10658.33 yens", function(){
    const yen = fromDollarToYen(100);
    const expected = ((100 / 1.2) * 127.9);
     expect(yen).toBe(parseFloat(expected.toFixed(2))); 
});

