"use strict";

function changeView(targetPage) {
    model.app.currentPage = targetPage;
    model.fields.input = null;
    model.fields.output = null;
    console.log(targetPage);
    updateView();
}

function handleInputChange(input) {
    model.fields.input = input;

    convertInputToMeters();
    calculateOutput();
}

function convertInputToMeters() {
    const input = model.fields.input;
    const inputUnit = model.pages.length.selectedUnit.input;
    const unitFactor = model.pages.length.units[inputUnit].factor;
    model.pages.length.inputInMeters = parseFloat(input * unitFactor);
    console.log("Input in meters: " + model.pages.length.inputInMeters);
}

function setUnit(unit, field) {
    const currentPage = model.app.currentPage;
    model.pages[currentPage].selectedUnit[field] = unit;
    convertInputToMeters();
    calculateOutput();
}

function calculateOutput() {
    const outputUnit = model.pages.length.selectedUnit.output;
    const outputFactor = model.pages.length.units[outputUnit].factor;
    const inputInMeters = model.pages.length.inputInMeters;
    model.fields.output = parseFloat(inputInMeters / parseFloat(outputFactor));
    updateView();
}