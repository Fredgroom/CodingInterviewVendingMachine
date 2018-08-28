const VendingMachine = require('./vending-machine.js');
const inventory = require('../_mock_/inventoryMock.js');
const cash = require('../_mock_/cashMock.js');
let testVendingMachine;

describe('VendingMachine', () => {
    beforeEach(() => {
        testVendingMachine = new VendingMachine({ inventory, cash });
    });
    describe('getInventory()', () => {
        it('should return inventory supplied', () => {
            const result = testVendingMachine.getInventory();
            expect(result).toEqual(inventory);
        });
    });
    

});
