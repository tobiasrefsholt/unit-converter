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
}

function calculate() {
    switch (model.app.currentPage) {
        case 'length':
            convertLenghtInputToMeters();
            calculateLenghtOutput();
            updateView();
            break;
        case 'temperature':
            convertTemperatureInputToKelvin();
            calculateTemperatureOutput();
            updateView();
            break;
        case 'area':
            convertAreaInputToSquareMeters();
            calculateAreaOutput();
            updateView();
            break;
        case 'volume':
            convertVolumeInputToCubicMeters();
            calculateVolumeOutput();
            updateView();
            break;
        case 'weight':
            convertWeightInputToGrams();
            calculateWeightOutput();
            updateView();
            break;
        case 'time':
            convertTimeInputToSeconds();
            calculateTimeOutput();
            updateView();
            break;
    }
}

function setUnit(unit, field) {
    const currentPage = model.app.currentPage;
    model.pages[currentPage].selectedUnit[field] = unit;
    calculate();
    updateView();
}

function convertLenghtInputToMeters() {
    const input = model.fields.input;
    const inputUnit = model.pages.length.selectedUnit.input;
    const unitFactor = model.pages.length.units[inputUnit].factor;
    model.pages.length.inputInMeters = parseFloat(input * unitFactor);
    console.log("Input in meters: " + model.pages.length.inputInMeters);
}

function calculateLenghtOutput() {
    const outputUnit = model.pages.length.selectedUnit.output;
    const outputFactor = model.pages.length.units[outputUnit].factor;
    const inputInMeters = model.pages.length.inputInMeters;
    model.fields.output = parseFloat(inputInMeters / parseFloat(outputFactor));
}

function convertTemperatureInputToKelvin() {
    const input = model.fields.input;
    const inputUnit = model.pages.temperature.selectedUnit.input;
    const unitAdd = model.pages.temperature.units[inputUnit].add;
    const unitFactor = model.pages.temperature.units[inputUnit].factor;

    let inputInKelvin = input;
    inputInKelvin += unitAdd;
    inputInKelvin *= unitFactor;

    model.pages.temperature.inputInKelvin = inputInKelvin;
    console.log('inputInKelvin: ' + inputInKelvin);
}

function calculateTemperatureOutput() {
    const outputUnit = model.pages.temperature.selectedUnit.output;
    const outputAdd = model.pages.temperature.units[outputUnit].add;
    const outputFactor = model.pages.temperature.units[outputUnit].factor;
    const inputInKelvin = model.pages.temperature.inputInKelvin;
    let output = inputInKelvin;
    output = output / outputFactor;
    output -= outputAdd;
    model.fields.output = output;
}

function convertAreaInputToSquareMeters() {

}

function calculateAreaOutput() {

}

function convertVolumeInputToCubicMeters() {

}

function calculateVolumeOutput() {

}

function convertWeightInputToGrams() {

}

function calculateWeightOutput() {
    
}

function convertTimeInputToSeconds() {

}

function calculateTimeOutput() {

}