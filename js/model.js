"use strict";

const model = {
    app: {
        selectedUnit: {
            input: "meter",
            output: "foot",
        },
        inputInMeters: null,
    },
    fields: {
        length: {
            input: null,
            output: null,
        }
    },
    units: {
        meter: {
            factor: 1,
        },
        kilometer: {
            factor: 1000,
        },
        centimeter: {
            factor: 1 * 10**(-2),
        },
        millimeter: {
            factor: 1 * 10**(-3),
        },
        micrometer: {
            factor: 1 * 10**(-6),
        },
        nanometer: {
            factor: 1 * 10**(-9),
        },
        mile: {
            factor: 6.21371192 * 10**(-4),
        },
        yard: {
            factor: 1.0936133,
        },
        foot: {
            factor: 3.2808399,
        },
        inch: {
            factor: 39.3700787,
        },
        lightYear: {
            factor: 1.05702341 * 10**16,
        }
    }
}