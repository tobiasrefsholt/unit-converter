"use strict";
const model = {
    app: {
        currentPage: 'length',
    },
    fields: {
        input: null,
        output: null,
    },
    pages: {
        length: {
            selectedUnit: {
                input: "meter",
                output: "foot",
            },
            units: {
                meter: {
                    factor: 1,
                },
                kilometer: {
                    factor: 1000,
                },
                centimeter: {
                    factor: 1 * Math.pow(10, (-2)),
                },
                millimeter: {
                    factor: 1 * Math.pow(10, (-3)),
                },
                micrometer: {
                    factor: 1 * Math.pow(10, (-6)),
                },
                nanometer: {
                    factor: 1 * Math.pow(10, (-9)),
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
                    factor: 9.4605284 * Math.pow(10, 15),
                }
            }
        },
        temperature: {
            selectedUnit: {
                input: "celsius",
                output: "fahrenheit",
            },
            units: {
                kelvin: {
                    add: 0,
                    factor: 1,
                },
                celsius: {
                    add: 273.15,
                    factor: 1,
                },
                fahrenheit: {
                    add: 459.67,
                    factor: 5 / 9,
                },
            }
        },
        area: {
            selectedUnit: {
                input: "squareMeter",
                output: "hectare",
            },
            units: {
                squareMeter: {
                    factor: 1,
                },
                squareKiloMeter: {
                    factor: 1 * Math.pow(10, 6),
                },
                squareMilliMeter: {
                    factor: 1 * Math.pow(10, (-6)),
                },
                squareMicroMeter: {
                    factor: 1 * Math.pow(10, (-12)),
                },
                hectare: {
                    factor: 1 * Math.pow(10, 4),
                },
                squareMile: {
                    factor: 2.58998811 * Math.pow(10, 6),
                },
                squareYard: {
                    factor: 0.83612736,
                },
                squareFoot: {
                    factor: 9.290304 * Math.pow(10, (-2)),
                },
                squareInch: {
                    factor: 6.4516 * Math.pow(10, (-4)),
                },
            }
        },
        volume: {
            selectedUnit: {
                input: "liter",
                output: "usCup",
            },
            units: {
                cubucMeter: {
                    factor: 1 * Math.pow(10, 3),
                },
                cubucKilometer: {
                    factor: 1 * Math.pow(10, 12),
                },
                cubucCenitmeter: {
                    factor: 1 * Math.pow(10, (-3)),
                },
                cubucMillieter: {
                    factor: 1 * Math.pow(10, (-6)),
                },
                liter: {
                    factor: 1,
                },
                milliliter: {
                    factor: 1 * Math.pow(10, (-3)),
                },
                usGallon: {
                    factor: 3.78541,
                },
                usQuart: {
                    factor: 0.9463525,
                },
                usPint: {
                    factor: 0.47317625,
                },
                usCup: {
                    factor: 0.236588125,
                },
                usFluidOunce: {
                    factor: 0.0295735156,
                },
                usTableSpoon: {
                    factor: 0.0147867578,
                },
                usTeaSpoon: {
                    factor: 0.0049289193,
                },
                imperialGallon: {
                    factor: 4.54609,
                },
                imperialQuart: {
                    factor: 1.1365225,
                },
                imperialPint: {
                    factor: 0.56826125,
                },
                imperialFluidOunce: {
                    factor: 0.0284130625,
                },
                imperiaTableSpoon: {
                    factor: 0.0177581641,
                },
                imperialTeaSpoon: {
                    factor: 0.005919388,
                },
                cubicMile: {
                    factor: 4168180000000,
                },
                cubicYard: {
                    factor: 764.55485798,
                },
                cubicFoot: {
                    factor: 28.316846592,
                },
                cubicInch: {
                    factor: 0.016387064,
                },
            }
        },
        weight: {
            selectedUnit: {
                input: "kilogram",
                output: "pound",
            },
            units: {
                kilogram: {
                    factor: 1,
                },
                gram: {
                    factor: 1 * Math.pow(10, (-3)),
                },
                milligram: {
                    factor: 1 * Math.pow(10, (-6)),
                },
                metricTon: {
                    factor: 1 * Math.pow(10, 3),
                },
                longTon: {
                    factor: 1.01604608 * Math.pow(10, 3),
                },
                shortTon: {
                    factor: 9.07184 * Math.pow(10, 2),
                },
                pound: {
                    factor: 4.53592 * Math.pow(10, (-1)),
                },
                ounce: {
                    factor: 2.83495 * Math.pow(10, (-2)),
                },
                carrat: {
                    factor: 0.0002,
                },
                atomicMassUnit: {
                    factor: 1.660540199 * Math.pow(10, (-27)),
                },
            }
        },
        time: {
            selectedUnit: {
                input: "second",
                output: "minute",
            },
            units: {
                second: {
                    factor: 1,
                },
                millisecond: {
                    factor: 1 * Math.pow(10, (-3)),
                },
                microsecond: {
                    factor: 1 * Math.pow(10, (-6)),
                },
                nanosecond: {
                    factor: 1 * Math.pow(10, (-9)),
                },
                picosecond: {
                    factor: 1 * Math.pow(10, (-12)),
                },
                minute: {
                    factor: 60,
                },
                hour: {
                    factor: 3600,
                },
                day: {
                    factor: 86400,
                },
                week: {
                    factor: 604800,
                },
                month: {
                    factor: 2629800,
                },
                year: {
                    factor: 31557600,
                },
            }
        }
    }
};
