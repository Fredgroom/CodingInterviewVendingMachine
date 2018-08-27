
const VendingMachine = require('./vending-machine.js');
const Inventory = require('./vending-machine.js');
const Cash = require('./vending-machine.js');

describe('VendingMachine', () => {
    it('VendingMachine should be typeof Object', () => {

        expect(VendingMachine === Object);
    });
    describe('Inventory', () => {
        it('Inventory should be typeof Object', () => {
          
            expect(Inventory === Object);
        });

    });
    describe('Cash', () => {
        it('Cash should be typeof Object', () => {

            expect(Cash === Object);
        }); 
    });
});