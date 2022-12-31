if (typeof Test === 'undefined') require('../tester');

Test('and', function () {

    function t(expected, n, k) {
        Test.areEqual(String(expected), String(new BigNumber(n).and(k)));
    }

    BigNumber.config({
        DECIMAL_PLACES: 20,
        ROUNDING_MODE: 4,
        EXPONENTIAL_AT: [-7, 21],
        RANGE: 1e9,
        POW_PRECISION: 0
    });

    t(1, 13, 3);
    t(0, 24, 4);
    t(63751, 16578823, 65535)
});
