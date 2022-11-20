const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


const fromDollarToYen = (dollar) => {
    let result = ((dollar / 1.2) * 127.9);
    return parseFloat(result.toFixed(2))
};
const fromEuroToDollar = (euro) => {
    let result = (euro * 1.206)
    return parseFloat(result.toFixed(2))
};
const fromYenToPound = (yen) => {
    let result = ((yen / 127.9) * 0.8);
    return parseFloat(result.toFixed(2))
};

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};

console.log(fromEuroToDollar(3.5))