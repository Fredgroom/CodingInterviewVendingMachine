const VendingMachine = require('./vending-machine.js');
const mockInventory = require('../_mock_/inventoryMock.js');
const mockCash = require('../_mock_/cashMock.js');
let testVendingMachine;

describe('VendingMachine', () => {
    beforeEach(() => {
        testVendingMachine = new VendingMachine(mockInventory, mockCash);
    });
    describe('getInventory()', () => {
        it('should return inventory supplied', () => {
            const actualInventory = testVendingMachine.getInventory();
            expect(actualInventory).toEqual(mockInventory);
        });
    });
    describe('refillInventory()', () => {
        describe('when refilled inventory item exists', () => {
            it('should update inventory with new values', () => {
                const refilledItemZero = {
                    product: 'mars',
                    quantity: 500
                };
                const refilledInventory = [refilledItemZero];
                testVendingMachine.inventory[0].quantity -= 500;
                testVendingMachine.refillInventory(refilledInventory);
                const actualInventory = testVendingMachine.getInventory();
                expect(actualInventory).toEqual(mockInventory);
            });
        });
        describe('when refilled inventory item does not exist', () => {
            it('should not update inventory with new values', () => {
                const refilledItemZero = {
                    product: 'does not exist',
                    quantity: 500
                };
                const refilledInventory = [refilledItemZero];
                testVendingMachine.inventory[0].quantity -= 500;
                testVendingMachine.refillInventory(refilledInventory);
                const expectedItemZeroQuantity = mockInventory[0].quantity - 500;
                const actualItemZeroQuantity = testVendingMachine.inventory[0].quantity;
                expect(actualItemZeroQuantity).toEqual(expectedItemZeroQuantity);
            });
        });
    });
    describe('resupplyCash()', () => {
        describe('getCash()', () => {
            it('should return Cash supplied', () => {
                const actualCash = testVendingMachine.getCash();
                expect(actualCash).toEqual(mockCash);
            });
        });
        describe('when resupplied cash exists', () => {
            it('should update cash with new values', () => {
                const resuppliedCash = {
                    twoPounds: {
                        quantity: 20
                    }
                };
                console.log(resuppliedCash);
                testVendingMachine.cash.twoPounds.quantity -= 10;
                testVendingMachine.resupplyCash(resuppliedCash);
                const actualCash = testVendingMachine.getCash();
                expect(actualCash).toEqual(mockCash);
            });
        });
    });

});
