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
                const resuppliedCash = [{
                    coin: 'twoPounds',
                    quantity: 10

                }];
                testVendingMachine.cash[0].quantity -= 10;
                testVendingMachine.resupplyCash(resuppliedCash);
                const actualCash = testVendingMachine.getCash();
                expect(actualCash).toEqual(mockCash);
            });
        });

    });

    describe('dispenseProduct()', () => {
        describe('when product name does not exist', () => {
            it('should return false', () => {
                const coinsTendered = [{
                    value: 70,
                }];
                const doesProductNameExist = testVendingMachine.dispenseProduct('doesnotexist', coinsTendered);
                expect(doesProductNameExist).toEqual(false);
            });
        });
        describe('when product name exists', () => {

            describe('when product has insufficient quantity', () => {
                it('should return false', () => {
                    const coinsTendered = [];
                    testVendingMachine.inventory[0].quantity = 0;
                    const actualResult = testVendingMachine.dispenseProduct('mars', coinsTendered);
                    expect(actualResult).toEqual(false);
                });
            });
            describe('when product has sufficient quanitity', () => {
                describe('when product value is greater than coinsTendered', () => {
                    it('should return false', () => {
                        const coinsTendered = [{
                            value: 70,
                        }];
                        const actualResult = testVendingMachine.dispenseProduct('mars', coinsTendered);
                        expect(actualResult).toEqual(false);
                    });
                });
                describe('when product value is equal to coinsTendered', () => {
                    it('should return true', () => {
                        const coinsTendered = [{
                            value: 80,
                        }];
                        const actualResult = testVendingMachine.dispenseProduct('mars', coinsTendered);
                        expect(actualResult).toEqual(true);
                    });
                });
                describe('when product value is less than coinsTendered', () => {
                    it('should return true', () => {
                        const coinsTendered = [{
                            value: 100,
                        }];
                        const actualResult = testVendingMachine.dispenseProduct('mars', coinsTendered);
                        expect(actualResult).toEqual(true);
                    });
                });
            });


        });
    });

});