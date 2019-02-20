module.exports = function makeExchange(currency) {
    const objectExchange = {"H":50, "Q":25, "D":10, "N":5,"P":1}
    if(currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if(currency === 0) return {};
    for(let key in objectExchange){
        let col = 0;
        if (currency >= objectExchange[key]){
            while(currency >= objectExchange[key]){
                currency -= objectExchange[key]
                col++
            }
            objectExchange[key] = col;
        }
        else delete objectExchange[key];
    }
    return objectExchange;
}
