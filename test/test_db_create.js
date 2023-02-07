//import the User model
const test = require('./test_new');
const assert = require('assert');
  
describe('Creating documents in MongoDB', () => {
    it('Creates a New User', (done) => {
        const newtest = new test({ name: 'admin' });
        newtest.save() // returns a promise after some time
            .then(() => {
                //if the newUser is saved in db and it is not new
                assert(!newtest.isNew);
                done();
            });
    });
});