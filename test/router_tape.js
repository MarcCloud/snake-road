import test from 'tape';
import router from '../src';

test('router() should return an object', expect => {
    let r = router();
    expect.equal(typeof r, 'object', 'got the object');
    expect.end();
});
