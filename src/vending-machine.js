// const transactionFunctions = require('./Transaction-functions');
class VendingMachine {
    constructor(inventory, cash) {
        //use a hack to clone constructor parameters
        this.inventory = JSON.parse(JSON.stringify(inventory));
        this.cash = JSON.parse(JSON.stringify(cash));
    }
    getInventory() {
        return this.inventory;
    }
    refillInventory(refilledInventory) {
        refilledInventory.forEach((refilledProduct) => {
            const foundProduct = this.inventory.find((currentProduct) => {
                return currentProduct.product === refilledProduct.product;

            });
            if (foundProduct) {
                foundProduct.quantity += refilledProduct.quantity;
            }
        });
    }
    getCash() {
        return this.cash;
    }
    resupplyCash(resuppliedCash) {
        resuppliedCash.forEach((Coin) => {
            console.log(key, quantity[key]);
            const foundCoin = this.cash.find((currentCoin) => {
                return currentCoin.key.quantity === Coin.quantity;
            });
            if (foundCoin) {
                foundCoin.quantity += Coin.quantity;
            }
        });
    };

};


module.exports = VendingMachine;
