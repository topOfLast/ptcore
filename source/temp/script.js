function testFund(params = {}) {
    const {a, b, c} = params;
    console.log('a:', a, 'b:', b, 'c:', c);
}

testFund({a: 12, b: 32, c: 'abc'});
