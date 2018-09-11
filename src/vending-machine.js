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
        resuppliedCash.forEach((coin) => {
            const foundCoin = this.cash.find((currentCoin) => {
                return currentCoin.quantity === coin.quantity;
            });
            if (foundCoin) {
                foundCoin.quantity += coin.quantity;
            }
        });
    };
    sumCoins(coins) {
        let total = 0;
        coins.forEach((coin) => total += coin.value);
        return total;
    }
    dispenseProduct(productName, coinsTendered) {
        const foundProductObject = this.inventory.find((currentProduct) => {
            return currentProduct.product === productName;
        });
        const total = this.sumCoins(coinsTendered);
        if (!foundProductObject) {
            return false;
        };
        if (foundProductObject.quantity < 1) {
            return false;
        }; 
        if (total < foundProductObject.valueSterling) {
            return false;
        };
        if (total == foundProductObject.valueSterling) {
            return true;
        };
        if (total > foundProductObject.valueSterling) {
            return true;
        };
    }

};


module.exports = VendingMachine;
