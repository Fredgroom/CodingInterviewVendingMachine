// const transactionFunctions = require('./Transaction-functions');
class VendingMachine {
    constructor({ inventory, cash}) {
        this.inventory = JSON.parse(JSON.stringify(inventory));
        this.cash = JSON.parse(JSON.stringify(cash));
    }
    getInventory() {
        return this.inventory;
    }

};


module.exports = VendingMachine;
