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
        input: null,
        output: null,
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
            factor: 1609.344,
        },
        yard: {
            factor: 0.9144,
        },
        foot: {
            factor: 0.3048,
        },
        inch: {
            factor: 0.0254,
        },
        lightYear: {
            factor: 9.4605284 * 10**15,
        }
    }
}