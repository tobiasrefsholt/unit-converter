"use strict";

function getInput(input) {
    const inputUnit = model.app.selectedUnit.input;
    const unitFactor = model.units[inputUnit].factor;
    model.app.inputInMeters = input / unitFactor;
}

function calculateOutput() {
    const outputUnit = model.app.selectedUnit.output;
    const outputFactor = model.units[outputUnit].factor;
    const inputInMeters = model.app.inputInMeters;
    model.fields.output = outputFactor * inputInMeters;
    updateView();
}