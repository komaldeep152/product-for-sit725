const test = require('./test_new');
const assert = require('assert');
  
let Test;
// this will run before running every test
beforeEach((done) => {
    // Creating a new Instance of User Model
    Test = new test({  name: 'admin' });
    Test.save()
        .then(() => done());
});
  
describe('Reading Details of User', () => {
    it('Finds user with the name', (done) => {
        test.findOne({ name: 'admin' })
            .then((Test) => {
                assert(Test.name === 'admin');
                done();
            });
    })
})