"use strict";
function changeView(targetPage) {
    model.app.currentPage = targetPage;
    model.fields.input = null;
    model.fields.output = null;
    updateView();
}
function handleInputChange(input) {
    model.fields.input = parseInt(input);
    calculate();
    updateOutputField();
}
function setUnit(unit, field) {
    const currentPage = model.app.currentPage;
    model.pages[currentPage].selectedUnit[field] = unit;
    calculate();
    updateView();
}
function calculate() {
    const currentPage = model.app.currentPage;
    const inputField = model.fields.input;
    const inputUnit = model.pages[currentPage].selectedUnit.input;
    const unitAdd = model.pages[currentPage].units[inputUnit].add || null;
    const unitFactor = model.pages[currentPage].units[inputUnit].factor || null;
    let baseUnit = inputField;
    if (unitAdd != null)
        baseUnit += unitAdd;
    if (unitFactor != null)
        baseUnit *= unitFactor;
    console.log('baseUnit: ' + baseUnit);
    const outputUnit = model.pages[currentPage].selectedUnit.output;
    const outputAdd = model.pages[currentPage].units[outputUnit].add;
    const outputFactor = model.pages[currentPage].units[outputUnit].factor;
    let output = baseUnit;
    if (outputFactor)
        output = output / outputFactor;
    if (outputAdd)
        output -= outputAdd;
    model.fields.output = output;
}
