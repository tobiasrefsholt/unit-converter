"use strict";

function handeleInputChange(input) {
    model.fields.input = input;

    convertInputToMeters();
    calculateOutput();
}

function convertInputToMeters() {
    const input = model.fields.input;
    const inputUnit = model.app.selectedUnit.input;
    const unitFactor = model.units[inputUnit].factor;
    model.app.inputInMeters = parseFloat(input * unitFactor);
    console.log("Input in meters: " + model.app.inputInMeters);
}

function setUnit(unit, field) {
    model.app.selectedUnit[field] = unit;
    convertInputToMeters();
    calculateOutput();
}

function calculateOutput() {
    const outputUnit = model.app.selectedUnit.output;
    const outputFactor = model.units[outputUnit].factor;
    const inputInMeters = model.app.inputInMeters;
    model.fields.output = parseFloat(inputInMeters / parseFloat(outputFactor));
    updateView();
}