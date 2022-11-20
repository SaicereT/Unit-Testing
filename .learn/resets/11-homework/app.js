const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


const fromDollarToYen = (dollar) => {
    return ((dollar / 1.2) * 127.9);
};
const fromEuroToDollar = (euro) => {
    return (euro * 1.2);
};
const fromYenToPound = (yen) => {
    return ((yen / 127.9) * 0.8);
};

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};

console.log(fromEuroToDollar(3.5))