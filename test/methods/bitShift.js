if (typeof Test === 'undefined') require('../tester');

Test('bitShift', function () {

    function t(expected, n, k) {
        Test.areEqual(String(expected), String(new BigNumber(n).bitShift(k)));
    }

    BigNumber.config({
        DECIMAL_PLACES: 20,
        ROUNDING_MODE: 4,
        EXPONENTIAL_AT: [-7, 21],
        RANGE: 1e9,
        POW_PRECISION: 0
    });

    t(0, 0, 0);
    t(2, 1, 1);
    t(0, 1, -1);
    t(8, 2, 2);
    t(4294967296, 2, 31);
    t(0, 2, -2);
    t(33, 133, -2);
    t(0, 2, -4);
    t(22528, 22, 10);

    t(NaN, NaN, 0);
    t(NaN, NaN, -1);
    t(NaN, NaN, 1);
    t(NaN, NaN, 2);
    t(NaN, NaN, -2);

    t(Infinity, Infinity, 0);
    t(-Infinity, -Infinity, -1);
    t(Infinity, Infinity, 1);
    t(-Infinity, -Infinity, 2);
    t(Infinity, Infinity, -2);
});
