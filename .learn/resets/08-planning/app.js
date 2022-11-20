const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = {sum};

const fromDollarToYen = (dollar) => {
    return ((dollar / 1.2) * 127.9);
};
const fromEuroToDollar = (euro) => {
    let result = euro * 1.2;
    return result
};
const fromYenToPound = (yen) => {
    return ((yen / 127.9) * 0.8);
};


console.log(fromEuroToDollar(3.5))