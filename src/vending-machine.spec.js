const VendingMachine = require('./vending-machine');

describe('StudentStats', () => {
    describe(('when there is not inventory'), () => {
        it('should print none', () => {
            expect(printInventory([0]).toEqual('time to refill')
        );
        });
    });
});