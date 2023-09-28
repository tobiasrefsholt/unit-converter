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

}

function calculateTemperatureOutput() {

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