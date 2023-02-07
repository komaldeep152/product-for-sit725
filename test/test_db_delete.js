const test = require('./test_new');
const assert = require('assert');
  
describe('Deleting a User', () => {
  
    let Test;
    beforeEach((done) => {
        // user is an instance of User Model
        Test = new test({ name: 'admin' });
        Test.save()
            .then(() => done());
    });
  
    it('Removes a User using its instance', (done) => {
        test.remove()
        // Checking if the user was deleted from DB or not
        .then(() => test.findOne({ name: 'admin' }))
        .then((Test) => {
            assert(Test === null);
            done();
        });
    });
  
    it('Removes a user', (done) => {
        test.findOneAndRemove({ name: 'admin1' })
        .then(() => test.findOne({ name: 'admin1' }))
        .then((Test) => {
            assert(Test === null);
            done();
        });
    });
  
})